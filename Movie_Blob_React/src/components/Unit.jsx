/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/content/delete-sweep';
import { Link } from 'react-router-dom';
import { beautifyDate, displatMoviePoster } from './helperFunctions';
import rateStart from '../assets/rate_star.svg';

const Unit = props => (
  <div className="movie_holder_link_parent">
    <Link to={(props.isTV) ? (`/tv/${props.data.id}`) : (`/movie/${props.data.id}`)} className="movie_holder_link">
      <div className="movie_holder ">
        {displatMoviePoster(props.data.poster_path)}
        {(props.data.title) ? <p className="movie_holder_title">{props.data.title}</p> : null}
        {(props.data.name) ? <p className="movie_holder_title">{props.data.name}</p> : null}
        <p className="movie_holder_rates">
          <img src={rateStart} alt="Rate:" />
        &nbsp;
          {props.data.vote_average}
        &nbsp; | &nbsp;
        {props.data.vote_count}
        </p>
        {(props.data.release_date || props.data.first_air_date) ?
          <p className="release_date_p">
            {beautifyDate(props.isTV ? props.data.first_air_date : props.data.release_date)}
          </p>
          : null}
        {(props.data.pick) ?
          <p className="release_date_p  creator_pick">CREATOR'S PICK</p>
            : null}
      </div>
    </Link>
    {(props.removeAsFav) ?
      <div className="unit_delete_fomr_list_button_wraper">
        <IconButton onClick={() => props.removeAsFav(props.data.id)} >
          <RemoveIcon color="rgb(255, 82, 82)" />
        </IconButton>
      </div>
            : null}
  </div>
);


Unit.propTypes = {
  isTV: PropTypes.bool,
  removeAsFav: PropTypes.func,
  data: PropTypes.object.isRequired,
};

export default Unit;
