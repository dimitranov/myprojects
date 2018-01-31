import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red500, red300, orange500, orange300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
/**/
import flame_logo_src from "./flame_icon_svg.svg";
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/Register'
import ParentComponent from './Components/Dashboard/ParentComponent'
import { logout } from './helpers/auth'
import { firebaseAuth } from './Components/config'
/**/


import './App.css';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}



export default class App extends React.Component{
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="circle_progress_container"><CircularProgress size={60} thickness={7} /></div>
      </MuiThemeProvider>
    ) : (
      <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <div>
          <AppBar
             title="Combustion"
             style={{boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.4)"}}
             iconElementLeft={<img className="flame_logo" src={flame_logo_src}/>}
             iconElementRight={
               this.state.authed ?(
                       <FlatButton
                          label="Logout"
                          style={{color:"#fff", marginTop:"5px"}}
                          onClick={() => {
                            logout()
                          }}
                        />
                  ) : (<span>
                        <Link to="/login"><FlatButton  label="Login" style={{color:"#fff", marginTop:"5px"}}/></Link>
                      </span>)
                    }
          />
          <div className="container">
            <div className="row">
              <Switch>
                <PublicRoute authed={this.state.authed} path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' exact component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' exact  component={Register} />
              <PrivateRoute authed={this.state.authed} path='/dashboard' exact component={ParentComponent} />
                <Route render={() => <Home/>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#ff0054"
  },
  appBar: {
    height: 55,
  },
});
