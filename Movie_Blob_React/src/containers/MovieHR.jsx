import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './styles/moviesHR.css';
import subsMovie from '../assets/substitute_movie.jpg';

class MovieHR extends Component {
  componentDidMount() {
    $(document).ready(() => {
      setTimeout(() => { $('.movieHR_main').addClass('fade_in'); }, 1400);
    });
  }
  render() {
    if (this.props.data.length > 1) {
      return (
        <div className="movieHR_main_container">
          <div className="movieHR_main">
            <div className="movie_container_hr">
              <img
                src={(this.props.data[1].poster_path !== null) ?
                `http://image.tmdb.org/t/p/w185/${this.props.data[1].poster_path}` : subsMovie}
                alt="img"
                className="movie_hr_movie_image hr_image1"
              />
              <img src={(this.props.data[7].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[7].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image2" />
            </div>
            <div className="movie_container_hr">
              <img src={(this.props.data[2].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[2].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image3" />
              <img src={(this.props.data[8].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[8].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image4" />
            </div>
            <div className="movie_container_hr">
              <img src={(this.props.data[3].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[3].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image5" />
              <img src={(this.props.data[9].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[9].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image6" />
            </div>
            <div className="movie_container_hr">
              <img src={(this.props.data[4].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[4].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image7" />
              <img src={(this.props.data[10].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[10].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image8" />
            </div>
            <div className="movie_container_hr">
              <img src={(this.props.data[5].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[5].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image9" />
              <img src={(this.props.data[11].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[11].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image10" />
            </div>
            <div className="movie_container_hr">
              <img src={(this.props.data[6].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[6].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image11" />
              <img src={(this.props.data[12].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[12].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image12" />
            </div>
            {(window.innerWidth > 1000) ? (
              <div>
                <div className="movie_container_hr">
                  <img src={(this.props.data[13].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[13].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image11" />
                  <img src={(this.props.data[14].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[14].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image12" />
                </div>
                <div className="movie_container_hr">
                  <img src={(this.props.data[15].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[16].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image11" />
                  <img src={(this.props.data[17].poster_path !== null) ? `http://image.tmdb.org/t/p/w185/${this.props.data[17].poster_path}` : subsMovie} alt="img" className="movie_hr_movie_image hr_image12" />
                </div>
              </div>) : null }
          </div>
        </div>
      );
    } return null;
  }
}

MovieHR.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MovieHR;
