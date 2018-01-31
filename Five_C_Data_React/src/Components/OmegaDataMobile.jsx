import React, { Component } from 'react';

class OmegaDataMobile extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;

  }
  render() {

    let C1Count = 0 ,C2Count = 0,C3Count = 0,C4Count = 0,C5Count = 0;
    for (var i = 0; i < this.data.length; i++) {
      switch (this.data[i].result) {
        case 0: C1Count += 1; break;
        case 1: C2Count += 1; break;
        case 2: C3Count += 1; break;
        case 3: C4Count += 1; break;
        case 4: C5Count += 1; break;
        default: null

      }
    }

    return (
      <div className="results_container">
        <p>Concept: <span>{C1Count}</span></p>
        <p>Connecting: <span>{C2Count}</span></p>
        <p>Collateral: <span>{C3Count}</span></p>
        <p>Communication: <span>{C4Count}</span></p>
        <p>Consolidation: <span>{C5Count}</span></p>
      </div>
    );
  }


}

export default OmegaDataMobile;
