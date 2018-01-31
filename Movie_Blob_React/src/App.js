import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo2.png';
import $ from 'jquery';
import {connect} from 'react-redux';
import Discover from './containers/Discover';
import Home from './containers/Home';
import TopMovies from './containers/TopMovies';
import Upcoming from './containers/Upcoming';
import TvShow from './containers/TvShow';
import Movie from './containers/Movie';
import Registration from './containers/Registration';
import Login from './containers/Login';
import MyList from './containers/MyList';




import { authed_true , authed_false } from './actions/userActions';


import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import { firebaseAuth , logout } from './config';


import FloatingActionButton from 'material-ui/FloatingActionButton';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import HabmurgerMenu from 'material-ui/svg-icons/navigation/menu';
import GoUpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Star from 'material-ui/svg-icons/toggle/star';
import HomeIcon from 'material-ui/svg-icons/action/home';
import TickTick from 'material-ui/svg-icons/action/done-all';
import LoginIcon from 'material-ui/svg-icons/action/input';
import LogoutIcon from 'material-ui/svg-icons/content/undo';
import RegistrationIcon from 'material-ui/svg-icons/content/create';
import {Tabs, Tab} from 'material-ui/Tabs';




const PrivateRoute  = ({component: Component, authed, ...rest}) => (
    <Route {...rest} render={(props) => authed === true ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}} />} />
)

const LoginRoute = ({component: Component, authed, ...rest}) => (
    <Route {...rest}   render={(props) => authed === false ? <Component {...props} /> : <Redirect to='/'/>} />
)




class App extends Component {
  componentDidMount() {
    $(document).ready(()=>{
      $(".go_to_top_button_holder").on("click",()=>{
        $("html, body").animate({ scrollTop: 0 }, 1000);
      })
    })
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.props.authed_true();
      } else {
        this.props.authed_false();
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  userStatusButton = () => {
    if(this.props.authed){
      return <MenuItem primaryText="Logout" leftIcon={<LogoutIcon color="rgb(120, 120, 120)"/>} onClick={()=>logout()}/>
    }
    else {
      return <Link to="/login" style={{textDecoration:"none"}}>
                <MenuItem primaryText="Login" leftIcon={<LoginIcon color="rgb(103, 222, 190)"/>}/>
              </Link>
    }
  }
  renderRegistrationButton = () => {
    if(!this.props.authed){
      return <Link to="/registration" style={{textDecoration:"none"}}>
              <MenuItem primaryText="Registration" leftIcon={<RegistrationIcon color="rgb(222, 160, 103)"/>}/></Link>
              }
    else return null
  }
  renderUserDataList = () => {
    if(this.props.authed){
      return <Link to="/mylist" style={{textDecoration:"none"}}>
              <MenuItem primaryText="My List" leftIcon={<TickTick color="rgb(130, 103, 222)"/>}/></Link>
              }
    else return null
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <div className="app_bar_wraper">
            <AppBar
            iconElementLeft={
              <Link to="/" style={{textDecoration:"none"}}>
                <img alt="ff" src={logo} className="logo"/>
              </Link>
            }
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><HabmurgerMenu  className="hamburger_menu"/></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                <Link to="/" style={{textDecoration:"none"}}>
                  <MenuItem primaryText="Home" leftIcon={<HomeIcon color="#e26486"/>} />
                </Link>
                <Link to="/toprated" style={{textDecoration:"none"}}>
                  <MenuItem primaryText="Top Rated" leftIcon={<Star color="rgb(239, 222, 0)"/>}/>
                </Link>
                <Link to="/discover" style={{textDecoration:"none"}}>
                  <MenuItem primaryText="Discover" leftIcon={<SearchIcon color="rgb(107, 216, 221)"/>}/>
                </Link>
                <Link to="/upcoming" style={{textDecoration:"none"}}>
                  <MenuItem primaryText="Upcoming" leftIcon={<UpArrow color="rgb(103, 222, 132)"/>}/>
                </Link>
                <Divider/>
                {this.renderUserDataList()}
                {this.userStatusButton()}
                {this.renderRegistrationButton()}
              </IconMenu>

            }
          />

        </div>

          <FloatingActionButton className="go_to_top_button_holder" >
            <GoUpArrow />
          </FloatingActionButton>


          <Switch>
            <Route authed={false}  path={process.env.PUBLIC_URL+'/'} exact component={Home} />
            <Route authed={false}  path={process.env.PUBLIC_URL+'/discover'} exact component={Discover} />
            <Route authed={false}  path={process.env.PUBLIC_URL+'/toprated'} exact component={TopMovies} />
            <Route authed={false}  path={process.env.PUBLIC_URL+'/upcoming'} exact component={Upcoming} />
            <Route authed={false}  path={process.env.PUBLIC_URL+'/movie/:movieId'}  component={Movie } />
            <Route authed={false}  path={process.env.PUBLIC_URL+'/tv/:tvId'}  component={TvShow} />
            <LoginRoute authed={this.props.authed}  path={process.env.PUBLIC_URL+'/registration'}  component={Registration} />
            <PrivateRoute authed={this.props.authed}  path={process.env.PUBLIC_URL+'/mylist'}  component={MyList} />
            <LoginRoute authed={this.props.authed}  path={process.env.PUBLIC_URL+'/login'}  component={Login} />
            <Route render={() => <Home/>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}


const mapStateToProps = (state) => ({
    moviesForSliders : state.moviesSlidersReducer.moviesForSliders,
    authed: state.userReducer.authed,
})

const mapDispatchToProps = (dispatch) => ({
  authed_true: () => {
    dispatch(authed_true())
  },
  authed_false: () => {
    dispatch(authed_false())
  },
})




export default connect(mapStateToProps,mapDispatchToProps)(App);



















//pick by ganre with buttons
//pick by year
//pick by movie or tv series
//pick by ganre and year
//
