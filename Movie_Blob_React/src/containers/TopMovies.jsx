import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import Movies from './Movies';
import CircularProgress from 'material-ui/CircularProgress';
import Footer from '../components/Footer';
import {Tabs, Tab} from 'material-ui/Tabs';
import MoviesIcon from 'material-ui/svg-icons/action/theaters';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import SwipeableViews from 'react-swipeable-views';
import {
  setData_Toprated ,
  loadNextMovies_Toprated
} from '../actions/moviesActions';
import {
  setData_Toprated_TV ,
  loadNextMovies_Toprated_TV
} from '../actions/tvActions';
class TopMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex:0,
    }
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    })
  }
  componentDidMount() {
    $(document).ready(function(){
      	setTimeout(()=>{
          $(".circle_progress_container").fadeOut(200);
         },500)
    });
    this.pageCounter_MOVIE = 2;
    this.pageCounter_TV = 2;
    if (this.props.data_Toprated.length < 1) {
      this.props.displayTopMovies()
    }
    if (this.props.data_Toprated_TV.length < 1) {
      this.props.displayTopMovies_TV()
    }
  }
  loadNextMovies = (page) => {
    this.props.loadNextMovies(page)
    this.pageCounter_MOVIE++;
  }
  loadNextMovies_TV = (page) => {
    this.props.loadNextMovies_TV(page)
    this.pageCounter_TV++;
  }
  chnageBG = (add,remove) => $("body").removeClass(remove).addClass(add);
  render() {
    return (
      [
        <div className="circle_progress_container " key="1">
          <CircularProgress size={40} thickness={5} color="#bf2127"/>
        </div>,
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex} key="2">
            <Tab icon={<MoviesIcon/>} value={0} label="MOVIES" onActive={()=>this.chnageBG("movie_body","tv_body")}/>
            <Tab value={1} icon={<TvIcon/>} label="TV SHOWS" onActive={()=>this.chnageBG("tv_body","movie_body")}/>
        </Tabs>,
        <SwipeableViews key="3"
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}>
          <div>
            <p className="jumbotron_title">Top Rated Movies</p>
            <Movies data={this.props.data_Toprated} isTV={false}/>
            <div style={{display:"flex",justifyContent:"center"}}>
              {(this.props.data_Toprated.length > 1)?<button className="genre_button" style={{marginTop:"45px"}} onClick={()=>this.loadNextMovies(this.pageCounter_MOVIE)}>load more</button>:null}
            </div>
          </div>
          <div>
            <p className="jumbotron_title">Top Rated TV Shows</p>
            <Movies data={this.props.data_Toprated_TV} isTV={true}/>
            <div style={{display:"flex",justifyContent:"center"}}>
              {(this.props.data_Toprated_TV.length > 1)?<button className="genre_button" style={{marginTop:"45px"}} onClick={()=>this.loadNextMovies_TV(this.pageCounter_TV)}>load more</button>:null}
            </div>
          </div>
      </SwipeableViews>,
      <Footer key="4"/>
      ]
    );
  }

}
const mapStateToProps = (state) => {
  return {
    data_Toprated: state.moviesReducer.data_Toprated,
    data_Toprated_TV: state.tvReducer.data_Toprated_TV,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNextMovies: (page) => {
      axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page="+page)
      .then(response => {
        console.log("Toprated movies new array",response.data.results);
        dispatch(loadNextMovies_Toprated(response.data.results))
      })
      .catch(e => console.log(e))
    },
    displayTopMovies: () => {
      axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => {
        console.log("Toprated movies array",response.data.results);
        dispatch(setData_Toprated(response.data.results))
      })
      .catch(e => console.log(e))
    },
    loadNextMovies_TV: (page) => {
      axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page="+page)
      .then(response => {
        console.log("Toprated tv new array",response.data.results);
        dispatch(loadNextMovies_Toprated_TV(response.data.results))
      })
      .catch(e => console.log(e))
    },
    displayTopMovies_TV: () => {
      axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => {
        console.log("Toprated tv array",response.data.results);
        dispatch(setData_Toprated_TV(response.data.results))
      })
      .catch(e => console.log(e))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopMovies);
