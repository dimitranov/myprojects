import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo.svg';

const GetStarted = (props) => (<div className="get_started_container">
  <div className="main_logo_container">
    <img src={logo} className="main_logo_svg"/>
  </div>
  <h1>Rain Drop</h1>
  <h2>Be a drop in the big ocean</h2>
  <div className="button_container">
    <Link className="get_started_a" to="/singup">
      <button className="button get_started_btn">Get Started</button>
    </Link>
  </div>
  <footer>
		<p className="cr">Copyright &copy; Georgi Dimitranov</p>
	</footer>
</div>)

export default GetStarted;
