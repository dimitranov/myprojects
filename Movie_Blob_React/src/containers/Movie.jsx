import React, { Component } from 'react';
import { firebaseAuth , ref } from '../config'
import { Link ,withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import {push_user_list_to_state} from '../actions/userActions';
import {
  getMovieInfoBasedOnId ,
  clearMovieInfo ,
  getMovieYOUTUBEBasedOnId ,
  getMovieSIMILARBasedOnId,
} from '../actions/moviesActions';

import PagePoster from '../components/PagePoster';
import UnitPageTitle from '../components/UnitPageTitle';
import UnitBonusButtons from '../components/UnitBonusButtons';
import YouTubeVideo from '../components/YouTubeVideo';
import UnitSimilarUnits from '../components/UnitSimilarUnits';
import UnitInfo from '../components/UnitInfo';
import PosterBackGround from '../components/PosterBackGround';
import Footer from '../components/Footer';

import CircularProgress from 'material-ui/CircularProgress';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/delete-sweep';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.loadAllData(this.props.match.params.movieId);
  }
  loadAllData = (movieID) => {
    $(document).ready(()=>{
      $(window).scrollTop(0);
      setTimeout(()=>{
        $(".full_width_block_container_parent").addClass("opacity_1");
        $(".circle_progress_container").fadeOut(200);},500);
      });
    this.props.getMovieInfo(movieID);
    this.props.getMovie_YOUTUBE(movieID);
    this.props.getMovie_SIMILAR(movieID);
  }
  componentDidMount() {
    this.user  = firebaseAuth().currentUser;
    if(this.user){
      ref.child(`users/${this.user.uid}/info`).on('value', snap =>{
        this.props.push_user_list_to_state({
            myMovieList:snap.val().myMovieList,
            myTvShowList:snap.val().myTvShowList
          })
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.movieId !== this.props.match.params.movieId) {
      this.loadAllData(nextProps.match.params.movieId);
    }
  }
  componentWillUnmount() {
    this.props.clearMovieInfo_MoviePage()
  }

  addAsFav = (id,poster_path,title,vote_average,vote_count) => {
    if (this.user !== null) {
      let tempData = [];
      if(this.props.myMovieList !== undefined){
        tempData = this.props.myMovieList
      }
      tempData.push({id,poster_path,title,vote_average,vote_count});
      ref.child(`users/${this.user.uid}/info`)
       .update({myMovieList:tempData})
       .then(() => console.log("NEW MOVIE ADDED",tempData))
       .catch(error => console.log(error))
    }
  }
  removeAsFav = (id) => {
    if (this.user !== null) {
      let tempData = this.props.myMovieList;
      for (let i = 0; i < tempData.length; i++) {
        if(tempData[i].id == id){
          tempData.splice(i,1);
          this.props.push_user_list_to_state(tempData);
          ref.child(`users/${this.user.uid}/info`)
           .update({myMovieList:tempData})
           .then(() => console.log("MOVIE REMOVED",id))
           .catch(error => console.log(error))
        }
      }
    }
  }
  renderSpacialUserButton = (id,authed,array,poster_path,title,vote_average,vote_count) => {
   if(array === undefined){
     return <button className="genre_button myList_control_button"  onClick={()=>this.addAsFav(id,poster_path,title,vote_average,vote_count)}><span><AddIcon color="rgb(75, 212, 104)" /></span><span>ADD TO LIST</span></button>
      }else if(array.length>=0){

      if (authed) {
        let tempArray = [];
        for (let i = 0; i < array.length; i++) {
          tempArray[i] = array[i].id
        }
        if(tempArray.includes(id)) return <p><span><button className="genre_button myList_control_button" onClick={()=>this.removeAsFav(id)}><span><RemoveIcon color="rgb(212, 75, 75)" /></span>REMOVE</button></span> IN MY LIST</p>
        else return <button className="genre_button myList_control_button"  onClick={()=>this.addAsFav(id,poster_path,title,vote_average,vote_count)}><span><AddIcon color="rgb(75, 212, 104)" /></span><span>ADD TO LIST</span></button>
      }else if(!authed) return <Link to="/login"><button className="genre_button">Login to save</button></Link>
    }else return null;
  }

  render() {
    let movie = this.props.thisMovieIdData;

    return (movie!=={})?
            <div className="all_data">
              <div className="circle_progress_container ">
                <CircularProgress size={40} thickness={5} color="#bf2127"/>
              </div>
              <PosterBackGround path={(movie.poster_path)?movie.poster_path:false}/>
              <div className="full_width_block_container_parent">
                <div className="full_width_block_container poster_container_centerated">
                  <PagePoster path={(movie.poster_path)?movie.poster_path:false}/>
                </div>
                <div className="full_width_block_container">
                  <UnitPageTitle title={movie.title} tagline={movie.tagline}/>
                  <UnitInfo
                    data={movie}
                    specialButton={
                      this.renderSpacialUserButton(
                        movie.id,
                        this.props.authed,
                        this.props.myMovieList,
                        movie.poster_path,
                        movie.title,
                        movie.vote_average,
                        movie.vote_count
                      )}/>
                  </div>
                </div>
              <UnitBonusButtons  imdb_id = {movie.imdb_id} title={movie.title} release_date={movie.release_date}/>
              <YouTubeVideo data={this.props.thisMovieIdDataYOUTUBE.results}/>
              {(this.props.thisMovieIdDataSIMILAR.length > 5)?
                <UnitSimilarUnits data={this.props.thisMovieIdDataSIMILAR}/>
                :null}
              <Footer/>
            </div>
          :<p>Loading ...</p>
  }
}

//maping the state to the props of the Component
const mapStateToProps = state => ({
    thisMovieIdData: state.moviesReducer.thisMovieIdData,
    thisMovieIdDataYOUTUBE: state.moviesReducer.thisMovieIdDataYOUTUBE,
    thisMovieIdDataSIMILAR: state.moviesReducer.thisMovieIdDataSIMILAR,
    authed: state.userReducer.authed,
    myMovieList: state.userReducer.myMovieList,
  })
//creating functions as props of the Component for dispatching an action
const mapDispatchToProps = dispatch => ({
    getMovieInfo: (id) => {
      axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=fa155f635119344d33fcb84fb807649b&language=en-US")
      .then(response => { dispatch(getMovieInfoBasedOnId(response.data)) })
      .catch(e => console.log(e))
    },
    getMovie_YOUTUBE: (id) => {
      axios.get("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => { dispatch( getMovieYOUTUBEBasedOnId(response.data)) })
      .catch(e => console.log(e))
    },
    getMovie_SIMILAR: (id) => {
      axios.get("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => { dispatch( getMovieSIMILARBasedOnId(response.data.results)) })
      .catch(e => console.log(e))
    },
    clearMovieInfo_MoviePage: () => {
      dispatch(clearMovieInfo())
    },
    push_user_list_to_state: (data) => {
      dispatch(push_user_list_to_state(data))
      console.log("push_user_list_to_state executed");
    }
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Movie));
