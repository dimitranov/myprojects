import React from 'react';
import PropTypes from 'prop-types';
import pocorns from '../assets/pocorns.png';
import noPoster from '../assets/no_poster.png';
import codadrink from '../assets/codadrink.png';

const PagePoster = props => (
  <div className="movie_image_div_container_wraper">
    <img src={pocorns} alt="" className="pocorns_img" />
    <img src={codadrink} alt="" className="codadrink_img" />
    <div className="movie_image_div_container">
      {
        <img alt="" src={(!props.path) ? noPoster : (`http://image.tmdb.org/t/p/w185/${props.path}`)} className="movie_image" />
      }
    </div>
  </div>
);

PagePoster.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PagePoster;
