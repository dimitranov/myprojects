import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class FuelMoney extends React.Component{
  constructor(props){
    super(props);
    this.addFuelData = props.addFuelData;
      this.state = {
        fueling:"",
        distance:"",
        fuel_price:"",
        driveTypeK:1,
        fuel_cons:"",
        modal_visible:false
      }
  }
  calculate_by_price(){
    const fueling = this.state.fueling,
          distance = this.state.distance,
          fuel_price = this.state.fuel_price,
          driveTypeK = this.state.driveTypeK;
          if (fueling == "" ) {
            this.setState({
                  fuel_cons:""
              });
          }else if( distance == ""){
            this.setState({
                  fuel_cons:""
              });
          }else if(fuel_price == ""){
            this.setState({
                  fuel_cons:""
              });
          }else{
            const y = (((100*fueling)/(distance*fuel_price))*driveTypeK).toFixed(2);
            this.setState({
              fuel_cons:y
            });
          }
  }
  clear(){
    this.setState({
      fueling:"",
      distance:"",
      fuel_price:"",
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
            >Here you can calculate what is the fuel consumption of your car based on the price you pay for fueling, the distance, the fuel price and the type of driving you do.<br/><br/>
            1. Input how much you pay<br/>
            2. Input distance you pass<br/>
            3. Input the fuel price<br/>
            4. Select type of driving
          </Dialog>
          <TextField
            hintText="e.g: 20"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            onChange={(e)=>{this.setState({ fueling: e.target.value })}}
            value={this.state.fueling}
            type="number"
            name="distance"
            floatingLabelText="Fueling"
            ref="distance"
            style={{width:"60%"}}
          /><span> BGN</span><br />
          <TextField
            hintText="e.g. 120"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            floatingLabelText="Distance"
            ref="fuel_cons"
            type="number"
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            name="fuel_cons"
            onChange={e=>{this.setState({distance:e.target.value})}}
            value={this.state.distance}
            style={{width:"60%"}}
          /><span> KM</span><br />
          <TextField
            hintText="e.g. 2.11"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            floatingLabelText="Fuel Price"
            ref="fuel_price"
            type="number"
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            onChange={e=>{this.setState({fuel_price:e.target.value})}}
            value={this.state.fuel_price}
            style={{width:"60%"}}
            name="fuel_price"
          /><span> BGN</span><br />

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
            onClick={this.calculate_by_price.bind(this)} />
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
