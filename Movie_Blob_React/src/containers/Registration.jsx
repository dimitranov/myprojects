import React, { Component } from 'react';
import { auth , emailRegex} from '../config'
import {connect} from 'react-redux';
import $ from 'jquery';
import Footer from '../components/Footer';
import {emailValidation,passValidation} from '../components/helperFunctions';


class Registration extends Component {
  constructor(props) {
    super(props);
    this.emailBool = false;
    this.passBool = false;
  }
  handleLogin = (email,pass) => {
    this.emailBool = false;
    this.passBool = false;
    emailValidation(email,this.emailBool);
    passValidation(pass,this.passBool);
    if( this.emailBool == false && this.passBool == false ){
      auth(email, pass).catch(e => alert(e))
    }else $("#login_error").html("Wrong Email and/or Password").removeClass("error_fade_out").addClass("error_fade_in");
  }
  render() {
    return (
        [
          <div className="centrated_form_container" key="1">
          <div className="form_container">
            <p className="user_base_titile">Registration</p>
            <form onSubmit={(e)=>e.preventDefault()}>
              <label  className="input_label">
                Email
                <input  type="text" onChange={(e)=>{this.email = e.target.value;emailValidation(this.email,this.emailBool);}} className="input_title input_user_base"  placeholder="example@example.com" />
              </label>
              <div className="validation_error_message_container">
                <p className="validation_error_message" id="email_error">Email not valid</p>
              </div>
              <label  className="input_label">
                Password
                <input  type="password" onChange={(e)=>{this.password = e.target.value; passValidation(this.password,this.passBool);}} className="input_title input_user_base" placeholder="Make it secure"/>
              </label>
              <div className="validation_error_message_container">
                <p className="validation_error_message" id="pass_error">Password too short</p>
              </div>
              <p className="validation_error_message" id="login_error">{this.loginErr}</p>
              <button onClick={()=>this.handleLogin(this.email,this.password)} className="genre_button genre_button_user_base">Create Account</button>
            </form>
          </div>
        </div>,
        <div className="under_form" key="2">
          <p className="under_form_p">Register to save movies and tv shows to your special list and watch them later.</p>
        </div>,
        <Footer key="3"/>
      ]
    );
  }

}

const mapStateToProps = (state) => ({
    authed: state.userReducer.authed,
})

export default connect(mapStateToProps)(Registration);
