import React, { Component } from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Price extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        price:"",
        loadup:"",
        distance:"",
        fuel_cons:"",
        fuel_price:"",
        modal_visible:false
      }
  }
  calculate(){

      const distance = this.state.distance;
      const fuel_cons = this.state.fuel_cons;
      const fuel_price = this.state.fuel_price;
      console.log(distance);
      if (distance == "" ) {
        this.setState({
            price: "",
            loadup: ""
          });
      }else if( fuel_cons == ""){
        this.setState({
            price: "",
            loadup: ""
          });
      }else if(fuel_price == ""){
        this.setState({
            price: "",
            loadup: ""
          });
      }else{
        const x = (( distance * fuel_cons ) / 100).toFixed(3);;
        const y = (x * fuel_price).toFixed(2);
        const z = (y / fuel_price).toFixed(2);
        this.setState({
            price: y,
            loadup: z
          });
      }
  }
  clear(){
    this.setState({
      price:"",
      loadup:"",
      distance:"",
      fuel_cons:"",
      fuel_price:""
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
      <div>
        <div className="title_wraper"><h2>Price of a Trip</h2></div>

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
            >Here you can calculate how much money you will spend on passing a distance, based on your car fuel consumption and the price of the fuel you use. <br/><br/>
            1. Input the distance<br/>
            2. Input fuel consumption of your car<br/>
            3. Input fuel price
          </Dialog>

          <TextField
            hintText="e.g: 30"
            floatingLabelStyle={{ fontSize:"18px" , color:"#717171"}}
            floatingLabelShrinkStyle={{color:"rgb(170, 36, 36)"}}
            inputStyle={{fontSize:"22px", padding:"0 0 0 10px"}}
            onChange={(e)=>{this.setState({ distance: e.target.value })}}
            value={this.state.distance}
            type="number"
            name="distance"
            floatingLabelText="Distance"
            ref="distance"
            style={{width:"60%"}}
          /><span> KM</span><br />
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
            onClick={this.calculate.bind(this)} />
            <RaisedButton label="Clear"  style={{margin:"12px"}}
            onClick={this.clear.bind(this)} />
          </div>
          <p className="result_p">{( this.state.price !== "" )?this.state.price + " BGN":""}</p>
          <p className="result_p">{( this.state.loadup !== "" )?this.state.loadup + " liters of fuel":""}</p>
        </div>
      </div>
    )
  }
}

// TextField STYLES
// floatingLabelFocusStyle
// floatingLabelShrinkStyle
// floatingLabelStyle
// hintStyle
// inputStyle
// textareaStyle
// underlineDisabledStyle
// underlineFocusStyle
// underlineStyle
