import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class FuelLiters extends React.Component{
  constructor(props){
    super(props);
    this.addFuelData = props.addFuelData;
      this.state = {
        liters:"",
        distance:"",
        driveTypeK:1,
        fuel_cons:"",
        modal_visible:false
      }
  }
  calculate_by_liters(){
    const liters = this.state.liters,
          distance = this.state.distance,
          driveTypeK = this.state.driveTypeK;

    if (liters == "" ) {
      this.setState({
            distance:""
        });
    }else if( distance == ""){
      this.setState({
            distance:""
        });
    }else{
      const x = ((( liters * 100 ) / distance)*driveTypeK).toFixed(2);;
      this.setState({
        fuel_cons:x
        });
    }

  }
  clear(){
    this.setState({
      liters:"",
      distance:"",
      fuel_cons:""
    })
  }
  radioDriveTypeSelected(e, selected){
    this.setState({driveTypeK:parseFloat(selected)},()=>console.log(this.state.driveTypeK))
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
    const radioStyles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
      },
      radioContainer: {
        marginTop: 20,
      }
    };
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
          >Here you can calculate what is the fuel consumption of your car based on the quantity of the fuel you load, the distance you pass with it and the type of driving you do most.<br/><br/>
          1. Input quantity of fuel<br/>
          2. Input distance you pass<br/>
          3. Select type of driving
        </Dialog>

        <TextField
          hintText="e.g: 20"
          floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
          floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
          inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
          onChange={(e)=>{this.setState({ liters: e.target.value })}}
          value={this.state.liters}
          type="number"
          floatingLabelText="Liters of Fuel"
          style={{width:"60%"}}
        /><span> L</span><br />
        <TextField
          hintText="e.g. 120"
          floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
          inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
          floatingLabelText="Distance"
          type="number"
          floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
          onChange={e=>{this.setState({distance:e.target.value})}}
          value={this.state.distance}
          style={{width:"60%"}}
        /><span> KM</span><br />

        <RadioButtonGroup name="driveType" defaultSelected='1' style={radioStyles.radioContainer} onChange={this.radioDriveTypeSelected.bind(this)}>
          <RadioButton
            value="1.25"
            label="Urban (20/50 km/h)"
          style={radioStyles.radioButton}/>
          <RadioButton
            value="1"
            label="Combined (30/70 km/h)" style={radioStyles.radioButton}/>
          <RadioButton
            value="0.75"
            label="Extra Urban (70/120 km/h)" style={radioStyles.radioButton}/>
        </RadioButtonGroup>
          <div className="div_flex_center fat_buttons_wraper">
            <RaisedButton label="Calculate" primary={true} style={{margin:"12px"}}
            onClick={this.calculate_by_liters.bind(this)} />
            <RaisedButton label="Clear"  style={{margin:"12px"}}
            onClick={this.clear.bind(this)}
            />
          </div>
          <p className="result_p">{( this.state.fuel_cons !== "" )?this.state.fuel_cons + " L":""}</p>
          {( this.state.fuel_cons !== "" )?(
              <div className="div_flex_center fat_buttons_wraper">
                <RaisedButton label="Save" primary={true} style={{margin:"12px"}}
                onClick={()=>this.addFuelData(this.state.fuel_cons)} />
              </div>
          ):null
          }
        </div>
      )
  }
}
