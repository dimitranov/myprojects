import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  Link } from "react-router-dom";
import {authed_false} from '../actions/userActions';
import PropTypes from 'prop-types';


const DropDownMenu = ({authed,logoutFunction}) => (
  <div className="menu_burger_containter">
  	<ul className="burger_ul">
  		<li>MENU</li>
  		<UserStatusButton authed={authed} logoutFunction={logoutFunction}/>
  	</ul>
  </div>
)

const UserStatusButton = ({authed,logoutFunction}) =>
authed ? <button onClick={()=>logoutFunction()}><li>Logout</li></button> : <Link to='/login'><li>Login</li></Link>




class MenuBar extends Component {
  static displayName = "MenuBar";

  state = {
    menuOpened: false,
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <header>
        	<div className="hamburger_nav" onClick={()=>this.setState({menuOpened:!this.state.menuOpened})}><span className="nav_span">H</span></div>
        	<div className="header_rd"><p>logo</p></div>
        	<div className="header_img">serch</div>
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
