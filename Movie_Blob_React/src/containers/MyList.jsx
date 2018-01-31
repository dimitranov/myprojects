import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import { firebaseAuth , ref } from '../config'
import {push_user_list_to_state} from '../actions/userActions';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import rateStart from '../assets/rate_star.svg';
import no_poster from '../assets/no_poster.png';
import Footer from '../components/Footer';
import MoviesIcon from 'material-ui/svg-icons/action/theaters';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import Unit from '../components/Unit';
import FavoriteUnitsList from '../components/FavoriteUnitsList';
import SwipeableViews from 'react-swipeable-views';

class MyList extends Component {
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
  removeAsFavTV = (id) => {
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
  
  chnageBG = (add,remove) => $("body").removeClass(remove).addClass(add);

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex} >
          <Tab icon={<MoviesIcon/>} value={0} label="MOVIES" onActive={()=>this.chnageBG("movie_body","tv_body")}/>
          <Tab value={1} icon={<TvIcon/>} label="TV SHOWS" onActive={()=>this.chnageBG("tv_body","movie_body")}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <FavoriteUnitsList data={this.props.myMovieList} isTV={false} removeAsFav={this.removeAsFav}/>
          </div>
          <div>
            <FavoriteUnitsList data={this.props.myTvShowList} isTV={true} removeAsFav={this.removeAsFavTV}/>
          </div>
        </SwipeableViews>
        <div className="big_separator"></div>
      <Footer/>
      </div>
    );
  }

}

const mapStateToProps =  (state) => ({
  authed: state.userReducer.authed,
  myMovieList: state.userReducer.myMovieList,
  myTvShowList: state.userReducer.myTvShowList,
})
const mapDispatchToProps =  (dispatch) => ({
  push_user_list_to_state: (data) => {
    dispatch(push_user_list_to_state(data))
    console.log("push_user_list_to_state EXECUTED");
  }
})




export default connect(mapStateToProps,mapDispatchToProps)(MyList);
