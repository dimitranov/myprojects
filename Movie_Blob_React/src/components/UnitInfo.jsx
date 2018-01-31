/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import rateStart from '../assets/rate_star.svg';
import { displayGanres, beautifyDate } from './helperFunctions';

const UnitInfo = props => (

  <div className="info_container_table">
    <p className="movie_rates">
      <img src={rateStart} alt="Rate:" className="movie_rates_rate_star" />&nbsp; {props.data.vote_average} / 10&nbsp; | &nbsp; {props.data.vote_count}
    </p>
    {props.specialButton}
    <p className="table_data_p">Genres:{displayGanres(props.data.genres)}</p>
    {(props.data.release_date) ? <p className="table_data_p">Release Date: {(props.data.release_date) ? <span>{beautifyDate(props.data.release_date)}</span> : null}</p> : null}
    {(props.data.runtime) ? <p className="table_data_p">Time: <span>{(props.data.runtime !== 0) ? `${props.data.runtime}   min` : 'no info'}</span> </p>
    : null}
    {
    (props.data.first_air_date) ?
    [
      <p className="table_data_p" key="1">Air Date: {(props.data.first_air_date) ? <span>{beautifyDate(props.data.first_air_date)}</span> : null}</p>,
      <p className="table_data_p" key="2">Num. Seasons: <span>{props.data.number_of_seasons}</span></p>,
      <p className="table_data_p" key="3">Num. Episodes: <span>{props.data.number_of_episodes}</span></p>,
    ]
    : null}
    <p className="overview_p">{props.data.overview}</p>
  </div>
);

UnitInfo.propTypes = {
  data: PropTypes.object.isRequired,
  specialButton: PropTypes.func.isRequired,
};

export default UnitInfo;
