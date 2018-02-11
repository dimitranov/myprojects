import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import SingUp from './containers/SingUp';
import Login from './containers/Login';
import Home from './containers/Home';
import Job from './containers/Job';
import CreateJobPage from './containers/CreateJobPage';

import {connect} from 'react-redux';
import { authed_true , authed_false } from './actions/userActions';
import { firebaseAuth , logout} from './helpers/config';

const PrivateRoute  = ({component: Component, authed, ...rest}) => (
    <Route {...rest} render={(props) => authed === true ? <Component {...props} />
      : <Redirect to={{pathname: '/', state: {from: props.location}}} />} />
)

const LoginRoute = ({component: Component, authed, ...rest}) => (
    <Route {...rest}   render={(props) => authed === false ? <Component {...props} /> : <Redirect to='/'/>} />
)

const ConditionalRoute = ({component: Component, authed, elseComponent: ElseComponent, ...rest}) => (
    <Route {...rest}   render={(props) => authed === true ? <Component {...props} /> : <ElseComponent {...props}/>} />
)



const Settings = () => `Settings`;

// const CreateJob = ({match}) => {
//   if(match.params.type == "company-job" ){
//     return `CreateCompanyApplication`;
//   }
//   else if(match.params.type == "personal-offer" )
//    return `Create Personal Application`;
// }


class App extends Component {

  componentDidMount() {
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

  render() {
    const { authed } = this.props;
    return (
      <Router>
        <Switch>
          <ConditionalRoute path="/" authed={authed} exact component={Home} elseComponent={GetStarted} />
          <LoginRoute authed={authed} path={process.env.PUBLIC_URL+'/login'} exact component={Login} />
          <LoginRoute authed={authed} path="/singup" exact component={SingUp} />
          <Route path="/job/:jobID" exact component={Job} />
          <PrivateRoute path="/create/:type" authed={authed} exact component={CreateJobPage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
    authed: state.userReducer.authed,
})

const mapDispatchToProps = dispatch => ({
  authed_true: () => {
    dispatch(authed_true())
  },
  authed_false: () => {
    dispatch(authed_false())
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
