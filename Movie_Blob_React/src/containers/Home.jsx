/* eslint-disable */
import React, { Component } from 'react';
import $ from 'jquery';
import MovieHR from './MovieHR';
import Footer from '../components/Footer';
import './styles/home.css';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSliderMoviesOnState, setSliderTvOnState } from '../actions/moviesSlidersActions';
import MoviesIcon from 'material-ui/svg-icons/action/theaters';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import axios from 'axios';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import MovieCreation from 'material-ui/svg-icons/image/movie-creation';
import FormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered';


import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Star from 'material-ui/svg-icons/toggle/star';
import Subject from 'material-ui/svg-icons/action/subject';


class Home extends Component {
  componentWillMount() {
    if (this.props.moviesForSliders.length < 1) {
      this.props.setSliderMoviesOnState(Math.floor(Math.random() * 3) + 1);
      this.props.setSliderTvOnState(Math.floor(Math.random() * 3) + 1);
    }
  }
  componentDidMount() {
    $(document).ready(function () {
      $(this).scrollTop(0);
      setTimeout(() => { $('.circle_progress_container').fadeOut(200); }, 500);
      setTimeout(() => { $('.welcome_to_p').addClass('come_in_place_from_bottom'); }, 600);
      setTimeout(() => { $('.app_main_title').addClass('pop_up_from_middle'); }, 1200);
      setTimeout(() => { $('.app_introduction').addClass('fade_in'); }, 1400);
    });
  }


  render() {
    return (
      <div>
        <div className="circle_progress_container ">
          <CircularProgress size={40} thickness={5} color="#bf2127" />
        </div>
        <MovieHR data={this.props.moviesForSliders} />
        <div className="jumbotron">
          <p className="welcome_to_p">WELCOME TO</p>
          <p className="app_main_title">MOVIE BLOB</p>
          <p className="app_introduction">Your searching for a movie to watch tonight, you're at the right place. Explore, discover and research movies and TV shows.</p>
        </div>
        <div className="separator_wraper_line"><div className="separator" /></div>
        <MovieHR data={this.props.tvForSliders} />
        <div className="container_row_to_colum">
          <Link to="/discover" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="jumbotron jumbotron_section">
              <div className="jumpotron_section_container">
                <p className="jumbotron_title">Discover</p>
                <div className="jumpotron_icon_holder">
                  <MoviesIcon color="#f5352f" style={{ margin: '8px' }} />
                  <SearchIcon color="#ef8d0f" style={{ margin: '8px' }} className="home_serch_icon svg_icons_primary" />
                  <TvIcon color="#88b298" style={{ margin: '8px' }} />
                </div>
                <p className="jumpotron_explanation">Discover movies and TV shows by title, year and genre. Get the most popular of a genre or a year.</p>
              </div>
            </div>
          </Link>
          <div className="separator_wraper" style={{ margin: '0px' }}><div className="dot_separator" /></div>
          <Link to="/upcoming" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="jumbotron jumbotron_section">
              <div className="jumpotron_section_container">
                <p className="jumbotron_title">Upcoming</p>
                <div className="jumpotron_icon_holder">
                  <FormatListNumbered color="#ef8d0f" style={{ margin: '8px' }} />
                  <UpArrow color="#88b298" style={{ margin: '8px' }} className="home_uparrow_icon svg_icons_primary" />
                  <MovieCreation color="#f5352f" style={{ margin: '8px' }} />
                </div>
                <p className="jumpotron_explanation">See upcoming movies and there release dates. Make plans for future fun.</p>
              </div>
            </div>
          </Link>
          <div className="separator_wraper" style={{ margin: '0px' }}><div className="dot_separator" /></div>
          <Link to="/toprated" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="jumbotron jumbotron_section">
              <div className="jumpotron_section_container">
                <p className="jumbotron_title">Top Rated</p>
                <div className="jumpotron_icon_holder">
                  <TrendingUp color="#88b298" style={{ margin: '8px' }} />
                  <Star color="#ef8d0f" style={{ margin: '8px' }} className="home_serch_icon svg_icons_primary" />
                  <Subject color="#f5352f" style={{ margin: '8px' }} />
                </div>
                <p className="jumpotron_explanation">See the top-rated movies in our chats. Pick one and enjoy watching it.</p>
              </div>
            </div>
          </Link>
          <div className="separator_wraper" style={{ margin: '0px' }}><div className="dot_separator" /></div>
          {(this.props.authed) ? <Link to="/mylist" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="jumbotron jumbotron_section">
              <div className="jumpotron_section_container">
                <p className="jumbotron_title">My List</p>
                <div className="jumpotron_icon_holder">
                  <MoviesIcon color="#ef8d0f" style={{ margin: '8px' }} />
                  <FormatListNumbered color="#88b298" style={{ margin: '8px' }} className="home_serch_icon svg_icons_primary" />
                  <TvIcon color="#f5352f" style={{ margin: '8px' }} />
                </div>
                <p className="jumpotron_explanation">Save movies and TV shows in your lists so you don't forget them.</p>
              </div>
            </div>
                                 </Link> : null}
        </div>
        <Footer />
      </div>
    );
  }
}

const shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const mapStateToProps = state => ({
  moviesForSliders: state.moviesSlidersReducer.moviesForSliders,
  tvForSliders: state.moviesSlidersReducer.tvForSliders,
  authed: state.userReducer.authed,
});

const mapDispatchToProps = dispatch => ({
  setSliderMoviesOnState: (page) => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=${page}`)
      .then((response) => {
        dispatch(setSliderMoviesOnState(shuffleArray(response.data.results)));
      }).catch(e => console.log(e));
  },
  setSliderTvOnState: (page) => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=${page}`)
      .then((response) => {
        dispatch(setSliderTvOnState(shuffleArray(response.data.results)));
      }).catch(e => console.log(e));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
