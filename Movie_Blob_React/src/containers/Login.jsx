import React, { Component } from 'react';
import $ from 'jquery';
import {  Link } from 'react-router-dom';
import { login,  emailRegex} from '../config'
import Footer from '../components/Footer';
import {emailValidation,passValidation} from '../components/helperFunctions';


class Login extends Component {
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
      login(email, pass).catch((e) => $("#login_error").html(e.message).removeClass("error_fade_out").addClass("error_fade_in"))
    }else $("#login_error").html("Wrong Email and/or Password").removeClass("error_fade_out").addClass("error_fade_in");
  }

  render() {
    return (
      [<div className="centrated_form_container" key="1">
        <div className="form_container">
          <p className="user_base_titile">Login</p>
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
              <input  type="password" onChange={(e)=>{this.password = e.target.value; passValidation(this.password,this.passBool);}} className="input_title input_user_base" placeholder="password"/>
            </label>
            <div className="validation_error_message_container">
              <p className="validation_error_message" id="pass_error">Password too short</p>
            </div>
            <p className="validation_error_message" id="login_error">{this.loginErr}</p>
            <button onClick={()=>this.handleLogin(this.email,this.password)} className="genre_button genre_button_user_base">Login</button>
            <p className="dont_have_acc_p">Dont have an account? <Link to="/registration" className="make_reg_link"> Register</Link></p>
          </form>
        </div>
      </div>,
      <div className="under_form" key="2">
        <p className="under_form_p">For test you can use the following account: </p>
        <p className="under_form_p_data"> test@gmail.com </p>
        <p className="under_form_p_data"> test123 </p>
      </div>,
      <Footer key="3"/>]
    );
  }

}

export default Login;
