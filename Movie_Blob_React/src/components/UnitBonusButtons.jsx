import React from 'react';
import PropTypes from 'prop-types';

const UnitBonusButtons = props => (
  <div className="IMDB_link_button_container" >
    <a href={`http://www.imdb.com/title/${props.imdb_id}`} className="IMDB_link">
      <button className="genre_button">Visit on IMDB</button>
    </a>
    {(props.title && props.release_date) ?
      <a
        href={`http://0123movies.com/movies-${props.title.replace(/[^a-zA-Z ]/g, '').toLowerCase().split(' ').join('-')}-${props.release_date.substring(0, 4)}-0123movies.html`}
        className="IMDB_link"
      >
        <button className="genre_button">Try to watch online</button>
      </a> : null}
  </div>
);

UnitBonusButtons.propTypes = {
  imdb_id: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default UnitBonusButtons;
