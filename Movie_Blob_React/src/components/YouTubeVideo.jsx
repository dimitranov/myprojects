/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const YouTubeVideo = props => ((props.data.length >= 1) ?
  <div>
    <div className="youtube_container">
      <p className="similar_movieS_title">Trailer</p>
      <iframe className="youtube_frame" width={(window.innerWidth < 1024) ? window.innerWidth : (window.innerWidth - (0.3 * window.innerWidth))} height={(window.innerWidth < 1024) ? (window.innerWidth / 1.75) : ((window.innerWidth - (0.3 * window.innerWidth)) / 1.75)} src={`https://www.youtube.com/embed/${props.data[0].key}`} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />
    </div>
  </div> : null);

YouTubeVideo.propTypes = {
  data: PropTypes.object.isRequired,
};


export default YouTubeVideo;
