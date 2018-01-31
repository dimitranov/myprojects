import React, { Component } from 'react';
import './styles/movies.css';
import { Link } from 'react-router-dom';
import Unit from '../components/Unit';
import rateStart from '../assets/rate_star.svg';
import no_poster from '../assets/no_poster.png';
import CircularProgress from 'material-ui/CircularProgress';

class Movies extends Component {
  shoundComponentUpdate(){
    return false;
  }
  renderMovies = () => {
    if(this.props.data.length > 1){
      let movies = this.props.data.map((movie,index) => {
        return(
          <Unit data={movie} key={index} isTV={this.props.isTV}/>
        )
      })
      return movies;
    }
  }
  render() {
    return (
      <div className="movies_container_wrapter">
        <div className="circle_progress_container ">
          <CircularProgress size={40} thickness={5} color="#bf2127"/>
        </div>
        <div className="movies_container">
          {(this.props.data.length > 1)?<div className="separator_wraper"><div className="separator"></div></div>:null}
          {this.renderMovies()}
        </div>
      </div>
    );
  }

}

export default Movies;
