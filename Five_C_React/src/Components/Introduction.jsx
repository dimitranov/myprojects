import React, { Component } from 'react';
import mainPic from "./../assets/five_c_all.png";
class Introduction extends Component {

  render() {
    return (
      <div className="intro_text">
        <p className="title">Welcome to The Five C Model Online Assessment</p>
        <div className="div_flex_center" style={{padding:"0 5%"}}>
          <img src={mainPic}  className="c_5_all_image" alt="Introduction"/>
        </div>
        <div className="padding_holder">
          <p className="text">The Five C Model is an organizational development tool that is holistic by nature and flexible by design. Its five elements: Concept, Connecting, Collateral, Communication and Consolidation fit together to create a strategic and structural overview that adds operational value and increased profitability in almost every business proposition.</p>
          <p className="text">This assessment is designed to encourage critical thinking and inspire continuous improvement. Please answer in the context of your business as a whole, not you as an individual. If you work quickly, honestly and don't overthink it, you'll be done in less than 5 minutes.</p>

          <p className="rated_responses">Rated responses:</p>


          <ol>
            <li>Excellent</li>
            <li>Good</li>
            <li>Average</li>
            <li>Needs Development</li>
            <li>Critical</li>
          </ol>

        <p className="NA_p">n/a. Does not relate to your industry</p>
        <p className="rated_responses">Before we start, please share a few details</p>




      </div>{/*Padding holder*/}
      </div>
    );
  }

}

export default Introduction;
