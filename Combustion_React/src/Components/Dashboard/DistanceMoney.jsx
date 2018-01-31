import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class DistanceMoney extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        fueling:"",
        fuel_cons:"",
        fuel_price:"",
        distance:"",
        modal_visible:false
      }
  }
  calculate_by_price(){
    const fueling = this.state.fueling,
          fuel_cons = this.state.fuel_cons,
          fuel_price = this.state.fuel_price;
    if (fueling == "" ) {
      this.setState({
            distance:""
        });
    }else if( fuel_cons == ""){
      this.setState({
            distance:""
        });
    }else if(fuel_price == ""){
      this.setState({
            distance:""
        });
    }else{

      const x = (( fueling / fuel_price ) * 100).toFixed(3);;
      const y = (x / fuel_cons).toFixed(2);
      this.setState({
        distance:y
        });
    }

  }
  clear(){
    this.setState({
      fueling:"",
      fuel_cons:"",
      fuel_price:"",
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
            >Here you can calculate how much distance you can drive your car, based on how much you pay for the fueling, the fuel consumption of your car and the price of the fuel.<br/><br/>
            1. Input how much you pay<br/>
            2. Input fuel consumption of your car<br/>
            3. Input fuel price
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
            hintText="e.g. 6.5"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            floatingLabelText="Fuel Consumption"
            ref="fuel_cons"
            type="number"
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            name="fuel_cons"
            onChange={e=>{this.setState({fuel_cons:e.target.value})}}
            value={this.state.fuel_cons}
            style={{width:"60%"}}
          /><span> L / 100km</span><br />
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
          <div className="div_flex_center fat_buttons_wraper">
            <RaisedButton label="Calculate" primary={true} style={{margin:"12px"}}
            onClick={this.calculate_by_price.bind(this)} />
            <RaisedButton label="Clear"  style={{margin:"12px"}}
            onClick={this.clear.bind(this)}
            />
          </div>
          <p className="result_p">{( this.state.distance !== "" )?this.state.distance + " KM":""}</p>
        </div>
      )
  }
}
