import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class DistanceLiters extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        liters:"",
        fuel_cons:"",
        distance:"",
        modal_visible:false
      }
  }
  calculate_by_liters(){
    const liters = this.state.liters,
          fuel_cons = this.state.fuel_cons;
    if (liters == "" ) {
      this.setState({
            distance:""
        });
    }else if( fuel_cons == ""){
      this.setState({
            distance:""
        });
    }else{

      const x = (( liters * 100 ) / fuel_cons).toFixed(3);;
      this.setState({
        distance:x
        });
    }

  }
  clear(){
    this.setState({
      liters:"",
      fuel_cons:"",
      distance:""
    })
  }
  handleOpen = () => {
    this.setState({modal_visible: true});
  };

  handleClose = () => {
    this.setState({modal_visible: false});
  };
  render(){
    const actions = [
      <FlatButton
        label="GOT IT"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    const modalStyle = {
      width: '95%',
      maxWidth: 'none',
    }
    return(
      <div className="forms_wraper">
          <FloatingActionButton mini={true}
            style={{position:"absolute", top:"-20px", right:"15px"}}
            onClick={this.handleOpen}
            >
            <InfoOutline />
          </FloatingActionButton>

          <Dialog
            title="Instruction  for use"
            actions={actions}
            modal={true}
            contentStyle={modalStyle}
            open={this.state.modal_visible}
            >Here you can calculate how much distance you can drive your car, based on the quantity of the fuel you load in your car and the fuel consumption.<br/><br/>
            1. Input quantity of the fuel<br/>
            2. Input fuel consumption of your car

          </Dialog>

          <TextField
            hintText="e.g: 10"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            onChange={(e)=>{this.setState({ liters: e.target.value })}}
            value={this.state.liters}
            type="number"
            name="liters"
            floatingLabelText="Liters"
            ref="distance"
            style={{width:"60%"}}
          /><span> L</span><br />
          <TextField
            hintText="e.g. 6.5"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            floatingLabelText="Fuel Consumption"
            ref="fuel_cons"
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            name="fuel_cons"
            type="number"
            onChange={e=>{this.setState({fuel_cons:e.target.value})}}
            value={this.state.fuel_cons}
            style={{width:"60%"}}
          /><span> L / 100km</span><br />

          <div className="div_flex_center fat_buttons_wraper">
            <RaisedButton label="Calculate" primary={true} style={{margin:"12px"}}
            onClick={this.calculate_by_liters.bind(this)} />
            <RaisedButton label="Clear"  style={{margin:"12px"}}
            onClick={this.clear.bind(this)}
            />
          </div>
          <p className="result_p">{( this.state.distance !== "" )?this.state.distance + " KM":""}</p>
        </div>
      )
  }
}
