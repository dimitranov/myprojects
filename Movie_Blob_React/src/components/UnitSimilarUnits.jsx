/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { beautifyDate } from './helperFunctions';

const UnitSimilarUnits = props =>
  [
    <p className="similar_movieS_title" key="title">{(props.isTV) ? 'Similar TV Shows' : 'Similar Movies'}</p>,
    <div className="youtube_container" key="data">
      <div className="similar_movieS_container">
        {props.data.slice(0, 4).map((unit, index) => (
          <Link to={(props.isTV) ? `/tv/${unit.id}` : `/movie/${unit.id}`} key={index} style={{ textDecoration: 'none', color: '#fff' }}>
            <div className="similar_movie_container">
              <div
                className="similar_movie_img_holder"
                onMouseEnter={() => {
                    if (window.innerWidth >= 1024) $(`#similarimg_${index}`).addClass('similar_movie_img_effect');
                  }}
                onMouseLeave={() => {
                    if (window.innerWidth >= 1024) $(`#similarimg_${index}`).removeClass('similar_movie_img_effect');
                  }}
              >
                <img id={`similarimg_${index}`} src={`http://image.tmdb.org/t/p/w185/${unit.poster_path}`} className="similar_movie_img" alt="" />
              </div>
              {(window.innerWidth >= 1024) ?
                <p style={{ padding: '0 5%' }}>{(props.isTV) ? unit.name : unit.title}</p> : null}
              {(window.innerWidth >= 1024) ?
                <p style={{ padding: '0 5%', fontSize: '0.9em', margin: '5px 0' }}>
                  {beautifyDate(props.isTV ? unit.first_air_date : unit.release_date)}
                </p> : null}
            </div>
          </Link>
            ))
      }
      </div>
    </div>,
  ];


UnitSimilarUnits.propTyper = {
  data: PropTypes.object.isRequired,
};

export default UnitSimilarUnits;
