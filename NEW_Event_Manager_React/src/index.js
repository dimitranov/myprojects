import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import events_list_reducer from './reducers/events_list_reducer';


const store = createStore(
  combineReducers({
    events_list_reducer
  }),
  {},
  applyMiddleware(logger),
);


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));

registerServiceWorker();
