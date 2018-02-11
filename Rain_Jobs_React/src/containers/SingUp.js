import React, {Component} from 'react';
import {connect} from 'react-redux';
import { auth } from '../helpers/config'
import {  Link } from "react-router-dom";
import logo from '../images/logo.svg';

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      repasword:"",
    };
  }
  handleInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  handleCreatUser = (email,pass) => {
    auth(email, pass).catch(e => alert(e))
  }
  render() {
    const { email , password } = this.state;
    return (<div>
      <div className="header_container_reg">
        <div className="header_logo_wraper">
          <img src={logo} id="logo" className="small_side_logo"/>
        </div>
        <div className="header_text_wraper">
          <p className="h1 reg_h1 ">Rain Drop</p>
          <p className="h2 reg_h2">Join us and swim in the big river</p>
        </div>
      </div>
      <p className="login_heading redistration_heading">Registration</p>
      <div>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name="firstname" onChange={this.handleInputChange}/>
          <p></p>
          <input type="text" name="lastname" onChange={this.handleInputChange}/>
          <p></p>
          <input placeholder="email" type="email" name="email" onChange={this.handleInputChange}/>
          <p></p>
          <input placeholder="password" type="password" name="password" onChange={this.handleInputChange}/>
          <p></p>
          {/* <input type="password" name="repasword" onChange={this.handleInputChange}/>
          <p></p> */}
          <button onClick={()=>this.handleCreatUser(email, password)}>Sing Up</button>
          <div className="or_container"><p>OR</p></div>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </form>
      </div>
      <footer className="login_foter">
    		<p className="cr">Copyright &copy; Georgi Dimitranov</p>
    	</footer>
    </div>);
  }

}



const mapStateToProps = (state) => ({
    authed: state.userReducer.authed,
})

export default connect(mapStateToProps)(SingUp);
