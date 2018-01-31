import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import moviesReducer from './reducers/moviesReducer';
import moviesSlidersReducer from './reducers/moviesSlidersReducer';
import tvReducer from './reducers/tvReducer';
import userReducer from './reducers/userReducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const store = createStore(
  combineReducers({
    moviesReducer, moviesSlidersReducer, tvReducer, userReducer,
  }),
  {},
  applyMiddleware(logger, thunk),
);

// const store = createStore(combineReducers({ moviesReducer , moviesSlidersReducer }));


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#000000',
    accent1Color: '#ffb4b5',
  },
  appBar: {
    height: 55,
  },
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'),
);

registerServiceWorker();
