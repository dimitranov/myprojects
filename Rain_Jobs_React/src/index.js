import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import jobsReducer from './reducers/jobsReducer';
import jobReducer from './reducers/jobReducer';



const store = createStore(
  combineReducers({
     userReducer,jobsReducer,jobReducer
  }),
  {},
  applyMiddleware(logger, thunk),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
