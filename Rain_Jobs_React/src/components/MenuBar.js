import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  Link } from "react-router-dom";
import {authed_false} from '../actions/userActions';
import PropTypes from 'prop-types';
import "../styles/MenuBar.css";

const DropDownMenu = ({authed,logoutFunction}) => (
  <div className="menu_burger_containter">
  	<ul className="burger_ul">
  		<li>HOME</li>
  		<UserStatusButton authed={authed} logoutFunction={logoutFunction}/>
      <Link to="/create/company-job"><li>CREATE JOB APPLICATION</li></Link>
  	</ul>
  </div>
)

const UserStatusButton = ({authed,logoutFunction}) =>
authed ?
<li onClick={()=>logoutFunction()}>Logout</li> :
<Link to='/login'><li>Login</li></Link>




class MenuBar extends Component {
  static displayName = "MenuBar";

  state = {
    menuOpened: false,
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className="header_container">
        <header>
        	<div className="hamburger_nav" onClick={()=>this.setState({menuOpened:!this.state.menuOpened})}><span className="nav_span"></span></div>
        </header>
        {this.state.menuOpened && <DropDownMenu authed={this.props.authed} logoutFunction={this.props.logout}/>}
      </div>
    )
  }
}

MenuBar.propTypes = {
  authed: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  authed: state.userReducer.authed,
})

const mapDispatchToProps = dispatch => ({
 logout: () => {
   dispatch(authed_false())
 },

})

export default connect(mapStateToProps,mapDispatchToProps)(MenuBar);
