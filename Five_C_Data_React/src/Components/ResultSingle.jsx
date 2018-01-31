import React from 'react';

const ResultSingle = (props) => (
  <div className="result_single">
    <p className="rated_responses">
      {props.title }
      <span>: &nbsp;&nbsp;&nbsp;&nbsp; </span>
      <span>{props.total} <span className="points_span">Points</span></span>
    </p>
    <p className="total_score_p">
      Scores: &nbsp;&nbsp;
    <span>{
        props.array[0] + " - " +
        props.array[1] + " - " +
        props.array[2] + " - " +
        props.array[3] + " - " +
        props.array[4]
      }</span>
    </p>
  </div>
)

export default ResultSingle;
