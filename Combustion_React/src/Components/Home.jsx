import React, { Component } from 'react'
import logo from './logo_flame.svg'
import {  Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

export default class Home extends Component {
  constructor(){
    super();
    this.state={
       loading:true
     }
  }
  componentDidMount() {
    this.setState({loading:false})
  }
  render () {
    return (
      <div>
        {(!this.state.loading)?
          (<div>
          <div className="div_flex_center">
            <img className="logo_home" src={logo} alt="Welcome"/>
          </div>
          <p className="home_p1">Combustion</p>
          <p className="home_p2">Manage your car expenses and variables, and keep track of usage and economy.</p>
          <p className="home_p3">Register and start managing your car in a better way.</p>
          <div className="div_flex_center">
            <Link to="/register">
              <RaisedButton label="Register" onClick={()=>{this.setState({loading:true})}}  labelStyle={{fontSize: '17px',paddingLeft:'21px',paddingRight:'21px'}} primary style={{margin:"20px"}} />
            </Link>
          </div>
      </div>):(
        <div className="circle_progress_container">
          <CircularProgress size={40} thickness={5} />
        </div>
      )}
      </div>
    )
  }
}
