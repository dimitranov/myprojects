import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
// import SwipeableViews from 'react-swipeable-views';//COMPONENT FOR TABS AND SLIDERS !!!!!!!!!!!!!!!
/*https://github.com/jl-/react-slide-deck    link*/
/*http://oliviertassinari.github.io/react-swipeable-views/   link*/






import { auth , emailRegex} from './../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component{
  constructor(){
    super()
    this.state = {
      registerError: null,
      email:'',
      password:'',
      loading:false }
  }
  handleSubmit = (e) => {

    e.preventDefault()
    if( (emailRegex.test(this.state.email)) &&(this.state.password.length !== 2)){
      this.setState({
        loading:true,
      },()=>{
      auth(this.state.email, this.state.password)
        .catch(e => this.setState(setErrorMsg(e)))
      })
    }else {
      this.setState({registerError:"Pleace inset email and password"})
    }

  }

  render() {

    return (
      <div>
          <div className="title_wraper slim_title_wraper"><h2 className="slim_h2">Registration</h2></div>
        {(!this.state.loading)?(
          <div className="forms_wraper">
             <div className="div_flex_center div_flex_colum" >
               <TextField
                 hintText="Enter your Email"
                 floatingLabelText="Email"
                 type="email"
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
                   this.state.registerError
                 }
                 <div className="div_flex_center div_flex_colum">
                   <RaisedButton label="Register" primary style={{margin:"15px"}} onClick={this.handleSubmit}/>
                 <Link to="/login"><FlatButton label="Login" primary style={{margin:"15px"}} onClick={()=>console.log("3")}/></Link>
               </div>
             </div>
          </div>
         ):(
             <div className="circle_progress_container circle_progress_container_upper">
               <CircularProgress size={40} thickness={5} />
             </div>
           )}
        </div>
    );
  }
}
