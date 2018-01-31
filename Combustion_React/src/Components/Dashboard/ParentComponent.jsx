import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SwipeableViews from 'react-swipeable-views';//COMPONENT FOR TABS AND SLIDERS !!!!!!!!!!!!!!!
/*https://github.com/jl-/react-slide-deck    link*/
/*http://oliviertassinari.github.io/react-swipeable-views/   link*/

import Price from "./Price"
import Distance from "./Distance";
import Fuel from "./Fuel";
import Data from "./Data";


import EuroLogo from 'material-ui/svg-icons/editor/monetization-on';
import LocationLogo from 'material-ui/svg-icons/maps/directions';
import FuelLogo from 'material-ui/svg-icons/maps/local-gas-station';
import DataLogo from 'material-ui/svg-icons/action/trending-up';
import numberChange from './../../helpers/auth'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { firebaseAuth , ref } from './../config'

injectTapEventPlugin();




export default class ParentComponent extends Component{
  constructor(props) {
    super(props);
    this.user  = firebaseAuth().currentUser;
    this.state = {
      index:0,
      fuelD:[],
      priceD:[],
      distanceD:[],
      newNum:""
    };
  }

  componentDidMount() {
    let prevfuelD = this.state.fuelD;
    let prevpriceD = this.state.priceD;
    let prevdistanceD = this.state.distanceD;

    ref.child(`users/${this.user.uid}/info`).on('value', snap =>{
      prevfuelD = snap.val().fuelD;
      this.setState({
        fuelD:prevfuelD
      });
    })
    ref.child(`users/${this.user.uid}/info`).on('value', snap =>{
      prevpriceD = snap.val().priceD;
      this.setState({
        priceD:prevpriceD
      });
    })
    ref.child(`users/${this.user.uid}/info`).on('value', snap =>{
      prevdistanceD = snap.val().distanceD;
      this.setState({
        distanceD:prevdistanceD
      });
    })
  }

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  }
  addFuelData = (n) => {
    if (this.user) {
      let today = new Date()
      , dd = today.getDate()
      , wd = today.getDay()
      , mm = today.getMonth()+1
      , yyyy = today.getFullYear()
      ,day;
      if(dd<10){dd='0'+dd;}
      if(mm<10){mm='0'+mm;}
      switch(wd){
        case 1: day="Mon"; break;
        case 2: day="Tue"; break;
        case 3: day="Wed"; break;
        case 4: day="Thu"; break;
        case 5: day="Fri"; break;
        case 6: day="Sat"; break;
        case 7: day="Sun"; break;
      }
      today = day +" "+dd+'/'+mm+'/'+yyyy;
      let tempData = new Array();
      if(this.state.fuelD !== ""){
        tempData = this.state.fuelD;
      }
      console.log(tempData);
      tempData.push({date:today,value:n});
      ref.child(`users/${this.user.uid}/info`)
       .update({fuelD:tempData})
       .then(() => console.log("fuelD changer"))
       .catch(error => console.log(error))
    } else {
      console.log("No user")
    }
  }
  addMoneyData = (n) => {
    if (this.user) {
      let today = new Date()
      , dd = today.getDate()
      , wd = today.getDay()
      , mm = today.getMonth()+1
      , yyyy = today.getFullYear()
      ,day;
      if(dd<10){dd='0'+dd;}
      if(mm<10){mm='0'+mm;}
      switch(wd){
        case 1: day="Mon"; break;
        case 2: day="Tue"; break;
        case 3: day="Wed"; break;
        case 4: day="Thu"; break;
        case 5: day="Fri"; break;
        case 6: day="Sat"; break;
        case 7: day="Sun"; break;
      }
      today = day +" "+dd+'/'+mm+'/'+yyyy;
      let tempData = new Array();
      if(this.state.priceD !== ""){
        tempData = this.state.priceD;
      }
      console.log(tempData);
      tempData.push({date:today,value:n});
      ref.child(`users/${this.user.uid}/info`)
       .update({priceD:tempData})
       .then(() => console.log("priceD changer"))
       .catch(error => console.log(error))
    } else {
      console.log("No user")
    }
  }
  addDistanceData = (n) => {
    if (this.user) {
      let today = new Date()
      , dd = today.getDate()
      , wd = today.getDay()
      , mm = today.getMonth()+1
      , yyyy = today.getFullYear()
      ,day;
      if(dd<10){dd='0'+dd;}
      if(mm<10){mm='0'+mm;}
      switch(wd){
        case 1: day="Mon"; break;
        case 2: day="Tue"; break;
        case 3: day="Wed"; break;
        case 4: day="Thu"; break;
        case 5: day="Fri"; break;
        case 6: day="Sat"; break;
        case 7: day="Sun"; break;
      }
      today = day +" "+dd+'/'+mm+'/'+yyyy;
      let tempData = new Array();
      if(this.state.distanceD !== ""){
        tempData = this.state.distanceD;
      }
      console.log(tempData);
      tempData.push({date:today,value:n});
      ref.child(`users/${this.user.uid}/info`)
       .update({distanceD:tempData})
       .then(() => console.log("distanceD changer"))
       .catch(error => console.log(error))
    } else {
      console.log("No user")
    }
  }

  render(){
    const stylesTab = {
      fontSize: "10px",
      height: "63px",
      margin: "-10px 0 0 0",
      color:"#fff",
    }

    return(
      <div>
        <Tabs
          inkBarStyle={{backgroundColor:"white"}}
          tabTemplateStyle={{fontSize:"50px"}}
          value={this.state.index}
          onChange={this.handleChange}
          style={{position: 'fixed',
                  bottom: '0px',
                  width:"100%",
                  boxShadow:" 0 -1px 6px rgba(0,0,0,0.5)",
                  zIndex:'3'}}
          >
          <Tab
            icon={<EuroLogo />}
            label="price"
            onActive={()=>this.setState({index:0})}
            style={stylesTab}
            value={0}
          />
          <Tab
            icon={<LocationLogo />}
            label="distance"
            style={stylesTab}
            onActive={()=>this.setState({index:1})}
            value={1}
          />
          <Tab
            icon={<FuelLogo />}
            label="fuel"
            style={stylesTab}
            onActive={()=>this.setState({index:2})}
            value={2}
          />
          <Tab
            icon={<DataLogo />}
            label="data"
            style={stylesTab}
            onActive={()=>this.setState({index:3})}
            value={3}
          />
        </Tabs>

        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <Price />
          <Distance />
          <Fuel addFuelData={this.addFuelData}/>
          <Data
            fuelD={this.state.fuelD}
            priceD={this.state.priceD}
            distanceD={this.state.distanceD}
            addMoneyData={this.addMoneyData}
            addDistanceData={this.addDistanceData}
          />
        </SwipeableViews>


        {/* <div>
          {
          (() => {  switch(this.state.page){
              case 0: {
                 return <Price/>
               } break;
              case 1: {
                 return <Distance/>
               } break;
              case 2: {
                return <Fuel/>
              } break;
              case 3: {
                return <p>page 4</p>
              } break;
            }

          }
        )()}
        </div> */}

      </div>
    )
  }

}
