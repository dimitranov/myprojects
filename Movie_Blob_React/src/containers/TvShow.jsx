import React, { Component } from 'react';
import {connect} from 'react-redux';
import { firebaseAuth , ref } from '../config'
import $ from 'jquery';
import axios from 'axios';
import { Link ,withRouter } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress';
import {
  getTvShowInfoBasedOnId ,
  getTvShowYOUTUBEBasedOnId ,
  getTvShowSIMILARBasedOnId ,
  clearTvShowInfo,
} from '../actions/tvActions';



import PagePoster from '../components/PagePoster';
import UnitPageTitle from '../components/UnitPageTitle';
import UnitBonusButtons from '../components/UnitBonusButtons';
import YouTubeVideo from '../components/YouTubeVideo';
import UnitSimilarUnits from '../components/UnitSimilarUnits';
import UnitInfo from '../components/UnitInfo';
import PosterBackGround from '../components/PosterBackGround';
import Footer from '../components/Footer';

import {push_user_list_to_state} from '../actions/userActions';
import rateStart from '../assets/rate_star.svg';
import pocorns from '../assets/pocorns.png';
import no_poster from '../assets/no_poster.png';
import codadrink from '../assets/codadrink.png';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/delete-sweep';


class TvShow extends Component {
  constructor(props) {
    super(props);
    this.loadAllData(this.props.match.params.tvId);
  }
  loadAllData = (tvID) => {
    $(document).ready(()=>{
        $(window).scrollTop(0);
      	setTimeout(()=>{
          $(".full_width_block_container_parent").addClass("opacity_1");
          $(".circle_progress_container").fadeOut(200);}

        ,500)
    });
    this.props.getTvShowInfo(tvID);
    this.props.getTvShow_YOUTUBE(tvID);
    this.props.getTvShow_SIMILAR(tvID);
  }
  componentDidMount() {

    console.log("componentDidMount on movie component");

    this.user  = firebaseAuth().currentUser;
    console.log(this.user,"Is user");
    if(this.user){
      ref.child(`users/${this.user.uid}/info`).on('value', snap =>{
        this.props.push_user_list_to_state({
            myMovieList:snap.val().myMovieList,
            myTvShowList:snap.val().myTvShowList
          })
      })
      console.log(this.props.myMovieList);
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.tvId !== this.props.match.params.tvId) {
      console.log(nextProps);
      this.loadAllData(nextProps.match.params.tvId);
    }
  }
  componentWillUnmount() {
    this.props.clearTvShowInfo_TvShowPage()
  }

  addAsFav = (id,poster_path,name,vote_average,vote_count) => {
    if (this.user !== null) {
      let tempData = [];
      if(this.props.myTvShowList !== undefined){
        tempData = this.props.myTvShowList
      }
      tempData.push({id,poster_path,name,vote_average,vote_count});

      ref.child(`users/${this.user.uid}/info`)
       .update({myTvShowList:tempData})
       .then(() => console.log("NEW MOVIE ADDED",tempData))
       .catch(error => console.log(error))
    }else {
      console.log("No user found", this.user)
    }
  }
  removeAsFav = (id) => {
    if (this.user !== null) {
      let tempData = this.props.myTvShowList;
      for (let i = 0; i < tempData.length; i++) {
        if(tempData[i].id == id){
          tempData.splice(i,1);
          //this.props.push_user_list_to_state(tempData);
          ref.child(`users/${this.user.uid}/info`)
           .update({myTvShowList:tempData})
           .then(() => console.log("MOVIE REMOVED",id))
           .catch(error => console.log(error))
        }
      }
    }else {
      console.log("No user found", this.user)
    }
  }
  renderSpacialUserButton = (id,authed,array,poster_path,name,vote_average,vote_count) => {
    console.log("ARRAY IS 1 ", array);
    if(array === undefined){
      return <button className="genre_button myList_control_button"  onClick={()=>this.addAsFav(id,poster_path,name,vote_average,vote_count)}><span><AddIcon color="rgb(75, 212, 104)" /></span><span>ADD TO LIST</span></button>
    }else if(array.length>=0){
      console.log("renderSpacialUserButton", array);
      if (authed) {
        let tempArray = [];
        for (let i = 0; i < array.length; i++) {
          tempArray[i] = array[i].id
        }
        if(tempArray.includes(id)) return <p><span><button className="genre_button myList_control_button" onClick={()=>this.removeAsFav(id)}><span><RemoveIcon color="rgb(212, 75, 75)" /></span>REMOVE</button></span> IN MY LIST</p>
        else return <button className="genre_button myList_control_button"  onClick={()=>this.addAsFav(id,poster_path,name,vote_average,vote_count)}><span><AddIcon color="rgb(75, 212, 104)" /></span><span>ADD TO LIST</span></button>
      }else if(!authed) return <Link to="/login"><button className="genre_button">Login to save</button></Link>
    }else return null;
  }
  render() {
    let tvshows = this.props.thisTvShowIdData;
    return (tvshows!=={})?
            <div className="all_data">
              <div className="circle_progress_container ">
                <CircularProgress size={40} thickness={5} color="#bf2127"/>
              </div>
              <PosterBackGround path={(tvshows.poster_path)?tvshows.poster_path:false}/>
              <div className="full_width_block_container_parent">
                <div className="full_width_block_container poster_container_centerated">
                  <PagePoster path={(tvshows.poster_path)?tvshows.poster_path:false}/>
                </div>
                <div className="full_width_block_container">
                  <UnitPageTitle title={tvshows.name}/>
                  <br/>
                  <UnitInfo
                    data={tvshows}
                    specialButton={
                      this.renderSpacialUserButton(
                        tvshows.id,
                        this.props.authed,
                        this.props.myTvShowList,
                        tvshows.poster_path,
                        tvshows.name,
                        tvshows.vote_average,
                        tvshows.vote_count
                      )}/>
                  </div>
                </div>
                <UnitBonusButtons  imdb_id = {tvshows.imdb_id} />
                <YouTubeVideo data={this.props.thisTvShowIdDataYOUTUBE.results}/>
                  {(this.props.thisTvShowIdDataSIMILAR.length > 5)?
                    <UnitSimilarUnits data={this.props.thisTvShowIdDataSIMILAR} isTV={true}/>
                    :null}
                <Footer/>
            </div>:<p>Loading ...</p>
    }
}
const mapStateToProps = state => ({
    thisTvShowIdData: state.tvReducer.thisTvShowIdData,
    thisTvShowIdDataYOUTUBE: state.tvReducer.thisTvShowIdDataYOUTUBE,
    thisTvShowIdDataSIMILAR: state.tvReducer.thisTvShowIdDataSIMILAR,
    authed: state.userReducer.authed,
    myTvShowList: state.userReducer.myTvShowList,
  })

const mapDispatchToProps = dispatch => ({
    getTvShowInfo: (id) => {//change links
      axios.get("https://api.themoviedb.org/3/tv/"+id+"?api_key=fa155f635119344d33fcb84fb807649b&language=en-US")
      .then(response => { dispatch(getTvShowInfoBasedOnId(response.data)) })
      .catch(e => console.log(e))
    },
    getTvShow_YOUTUBE: (id) => {//change links
      axios.get("https://api.themoviedb.org/3/tv/"+id+"/videos?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => { dispatch( getTvShowYOUTUBEBasedOnId(response.data)) })
      .catch(e => console.log(e))
    },
    getTvShow_SIMILAR: (id) => {//change links
      axios.get("https://api.themoviedb.org/3/tv/"+id+"/similar?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1")
      .then(response => { dispatch( getTvShowSIMILARBasedOnId(response.data.results)) })
      .catch(e => console.log(e))
    },
    clearTvShowInfo_TvShowPage: () => {
      dispatch(clearTvShowInfo())
    },
    push_user_list_to_state: (data) => {
      dispatch(push_user_list_to_state(data))
      console.log("push_user_list_to_state executed");
    }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TvShow));
