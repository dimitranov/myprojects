import React, { Component } from "react";
import DistanceMoney from "./DistanceMoney";
import DistanceLiters from "./DistanceLiters";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Distance extends React.Component{
  constructor(props){
    super(props);
    this.addDistanceData = props.addDistanceData;
      this.state = {
        mini_page:1,
        button_color_active1:true,
        button_color_active2:false,
      }
  }

  render(){
    return(
      <div>
        <div className="title_wraper slim_title_wraper"><h2 className="slim_h2">Distance</h2></div>

        <h5>Type of calculation</h5>

        <div className="slim_buttons_wraper div_flex_center">

          <RaisedButton label="In money"
            primary={this.state.button_color_active2}
            disabled={this.state.button_color_active1}

            style={{margin:"8px"}}

            onClick={()=>this.setState({
              mini_page:1,
              button_color_active1:true,
              button_color_active2:false,
            })}
           />
          <RaisedButton label="In liters"
            primary={this.state.button_color_active1}
            disabled={this.state.button_color_active2}

            style={{margin:"8px"}}

            onClick={()=>this.setState({
              mini_page:2,
              button_color_active1:false,
              button_color_active2:true,
            })}
           />
        </div>
        {
        (() => {  switch(this.state.mini_page){
            case 1: {
               return <DistanceMoney addDistanceData={this.addDistanceData}/>
             } break;
            case 2: {
               return <DistanceLiters addDistanceData={this.addDistanceData}/>
             } break;
          }
        }
      )()}
        </div>
    )
  }
}
