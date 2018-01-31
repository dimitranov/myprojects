import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EuroLogo from 'material-ui/svg-icons/editor/monetization-on';
import LocationLogo from 'material-ui/svg-icons/maps/directions';
import FuelLogo from 'material-ui/svg-icons/maps/local-gas-station';
import FuelData from './DataPages/FuelData';
import PriceData from './DataPages/PriceData';
import DistanceData from './DataPages/DistanceData';




class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mini_page:1,
      button_active_state1:true,
      button_active_state2:false,
      button_active_state3:false,

    }
  }

  render() {
    return (
      <div>
        <div className="title_wraper slim_title_wraper"><h2 className="slim_h2">Personal Data</h2></div>
        <h5>Type of data</h5>
        <div className="slim_buttons_wraper div_flex_center">
          <RaisedButton icon={<EuroLogo/>}
            primary
            disabled={this.state.button_active_state1}
            style={{margin:"10px 5px",minWidth:"60px"}}
            onClick={()=>this.setState({
              mini_page:1,
              button_active_state1:true,
              button_active_state2:false,
              button_active_state3:false,
            })}
           />
          <RaisedButton icon={<LocationLogo/>}
            primary
            disabled={this.state.button_active_state2}
            style={{margin:"10px 5px",minWidth:"60px"}}
            onClick={()=>this.setState({
              mini_page:2,
              button_active_state1:false,
              button_active_state2:true,
              button_active_state3:false,
            })}
           />
           <RaisedButton icon={<FuelLogo/>}
             primary
             disabled={this.state.button_active_state3}
             style={{margin:"10px 5px",minWidth:"60px"}}
             onClick={()=>this.setState({
               mini_page:3,
               button_active_state1:false,
               button_active_state2:false,
               button_active_state3:true,
             })}
            />
        </div>
          {/* {

            this.props.fuelD.map((data , i )=>{
              return (
                <p key={i}>date:{data.date}
                value:{data.value}</p>
              )
            })
          } */}
          {
          (() => {  switch(this.state.mini_page){
              case 1: {
                return  <PriceData priceD={this.props.priceD} addMoneyData={this.props.addMoneyData}/>
               } break;
              case 2: {
                 return <DistanceData distanceD={this.props.distanceD} addDistanceData={this.props.addDistanceData}/>//DistanceData + prop
               } break;
              case 3: {
                return  <FuelData fuelD={this.props.fuelD} />
              } break;
            }
          }
        )()}
      </div>
    );
  }

}

export default Data;
