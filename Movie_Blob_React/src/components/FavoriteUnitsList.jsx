/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Unit from '../components/Unit';


const renderMovies = (data, isTV, props) => {
  if (data === undefined) {
    return <p className="myList_empty_message">{(isTV) ? 'No TV shows added' : 'No Movies added'}</p>;
  } else if (data.length >= 0) {
    const units = data.map(unit => (
      <Unit data={unit} isTV={isTV} key={unit.id} removeAsFav={props.removeAsFav} />
    ));
    return units;
  } return null;
};

const FavoriteUnitsList = (props) => {
  const units = renderMovies(props.data, props.isTV, props);

  return [<p className="jumbotron_title" key="1">{(props.isTV) ? 'MY TV SHOW LIST' : 'MY MOVIE LIST'}</p>,
    <div className="movies_container_wrapter" key="2">
      <div className="movies_container">
        { units }
      </div>
    </div>];
};

Unit.propTyper = {
  removeAsFav: PropTypes.function,
};

FavoriteUnitsList.propTyper = {
  data: PropTypes.object.isRequired,
  isTV: PropTypes.bool,
};


export default FavoriteUnitsList;
