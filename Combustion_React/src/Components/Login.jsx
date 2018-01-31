import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
import {red500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SwipeableViews from 'react-swipeable-views';//COMPONENT FOR TABS AND SLIDERS !!!!!!!!!!!!!!!
/*https://github.com/jl-/react-slide-deck    link*/
/*http://oliviertassinari.github.io/react-swipeable-views/   link*/

import { login, resetPassword  , emailRegex} from './../helpers/auth'



export default class Login extends Component{
  constructor() {
    super()
    this.state = {
      loginMessage: null,
      email:'',
      password:''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if((emailRegex.test(this.state.email))&&(this.state.password.length !== 3)){
        login(this.state.email, this.state.password)
          .catch((error) => {
              this.setState({loginMessage:'Invalid username/password.'})
            })

    }else{
      this.setState({loginMessage:'Invalid username/password.'})
    }

  }

  render() {

    return (
      <div>
          <div className="title_wraper slim_title_wraper"><h2 className="slim_h2">Login</h2></div>
            <div className="forms_wraper">
             <div className="div_flex_center div_flex_colum">
                 <TextField
                   hintText="Enter your Email"
                   floatingLabelText="Email"
                   onChange = {(event,newValue) => this.setState({email:newValue})}
                   />
                 <br/>
                   <TextField
                     type="password"
                     hintText="Enter your Password"
                     floatingLabelText="Password"
                     onChange = {(event,newValue) => this.setState({password:newValue})}
                     />
                   <br/>
                   {
                     this.state.loginMessage
                   }
                   <div className="div_flex_center div_flex_colum">
                     <RaisedButton label="Login" primary style={{margin:"15px"}} onClick={this.handleSubmit}/>
                     <Link to="/register"><FlatButton label="Register" primary style={{margin:"15px"}} /></Link>
                   </div>
              </div>
          </div>
      </div>
    );
  }
}
