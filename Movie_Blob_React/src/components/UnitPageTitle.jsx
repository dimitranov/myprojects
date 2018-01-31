import React from 'react';

const UnitPageTitle = props => (
  [
    <p className="movie_title" key="title">{props.title}</p>,
    <div key="tagline">
      {(props.tagline) ?
        <p className="movie_tagline" >&quot;&nbsp;{props.tagline}&nbsp;&quot;</p>
        : <br />}
    </div>,
  ]
);

export default UnitPageTitle;
