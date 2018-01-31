import React from 'react';
import PropTypes from 'prop-types';
import noPoster from '../assets/no_poster.png';

const PosterBackGround = props => (
  <div className="movie_image_bg_parent" >
    <img alt="" src={(!props.path) ? noPoster : (`http://image.tmdb.org/t/p/w185/${props.path}`)} className="movie_image_bg" />
  </div>
);

PosterBackGround.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PosterBackGround;
