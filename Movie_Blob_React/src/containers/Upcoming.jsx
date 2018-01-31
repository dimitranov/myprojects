import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import Movies from './Movies';
import Footer from '../components/Footer';
import CircularProgress from 'material-ui/CircularProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import MoviesIcon from 'material-ui/svg-icons/action/theaters';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import SwipeableViews from 'react-swipeable-views';
import {
  setData_Upcoming ,
  loadNextMovies_Upcoming
 } from '../actions/moviesActions';
 import {
   setData_Upcoming_TV ,
   loadNextMovies_Upcoming_TV
 } from '../actions/tvActions';

class Upcoming extends Component {
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
    if(this.props.data_Upcoming.length < 1){
      this.props.displayUpcoming()
    }
    if(this.props.data_Upcoming_TV.length < 1){
      this.props.displayUpcoming_TV()
    }
  }
  chnageBG = (add,remove) => $("body").removeClass(remove).addClass(add);

  loadNextMovies = (page) => {
    this.props.loadNextMovies(page)
    this.pageCounter_MOVIE++;
  }
  loadNextMovies_TV = (page) => {
    this.props.loadNextMovies_TV(page)
    this.pageCounter_TV++;
  }
  render() {
    return (
      <div>
        <div className="circle_progress_container ">
          <CircularProgress size={40} thickness={5} color="#bf2127"/>
        </div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex} >
          <Tab icon={<MoviesIcon/>} value={0} onActive={()=>this.chnageBG("movie_body","tv_body")} label="MOVIES"/>
          <Tab value={1} icon={<TvIcon/>} onActive={()=>this.chnageBG("tv_body","movie_body")} label="TV SHOWS"/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}>
          <div>
            <p className="jumbotron_title">Upcoming Movies</p>
            <Movies releaseDate={true} data={this.props.data_Upcoming} isTV={false}/>
            <div style={{display:"flex",justifyContent:"center"}}>
              {(this.props.data_Upcoming.length > 1)?<button className="genre_button" style={{marginTop:"45px"}} onClick={()=>this.loadNextMovies(this.pageCounter_MOVIE)}>load more</button>:null}
            </div>
          </div>
          <div>
            <p className="jumbotron_title">Popular TV shows</p>
            <Movies releaseDate={true} data={this.props.data_Upcoming_TV} isTV={true}/>
            <div style={{display:"flex",justifyContent:"center"}}>
              {(this.props.data_Upcoming_TV.length > 1)?<button className="genre_button" style={{marginTop:"45px"}} onClick={()=>this.loadNextMovies_TV(this.pageCounter_TV)}>load more</button>:null}
            </div>
          </div>
      </SwipeableViews>
      <Footer/>
    </div>
    );
  }

}
//'url("./assets/cinema_bg.jpg")'
//'url("./assets/tv_bg.jpg")'



const mapStateToProps = (state) => {
  return {
    data_Upcoming: state.moviesReducer.data_Upcoming,
    data_Upcoming_TV: state.tvReducer.data_Upcoming_TV,
  }
}
//https://api.themoviedb.org/3/tv/popular?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=fa155f635119344d33fcb84fb807649b&language=en-US
const mapDispatchToProps = (dispatch) => {
  return {
    loadNextMovies: (page) => {
      axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page="+page)
      .then(response => {
        console.log("Upcoming movies new data array",response.data.results);
        dispatch(loadNextMovies_Upcoming(response.data.results))
      })
      .catch(e => console.log(e))
    },
    displayUpcoming: () => {
      axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => {
        console.log("Upcoming movies array",response.data.results);
        dispatch(setData_Upcoming(response.data.results))
      })
      .catch(e => console.log(e))
    },
    loadNextMovies_TV:(page) => {
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page="+page)
      .then(response => {
        console.log("Upcoming tv new data array",response.data.results);
        dispatch(loadNextMovies_Upcoming_TV(response.data.results))
      })
      .catch(e => console.log(e))
    },
    displayUpcoming_TV: () => {
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => {
        console.log("Upcoming tv array",response.data.results);
        dispatch(setData_Upcoming_TV(response.data.results))
      })
      .catch(e => console.log(e))
    },

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Upcoming);
