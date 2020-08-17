import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'; 
import appReducers from './store/reducers/rootReducer';
import {createLogger} from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const logger = createLogger({collapsed:true});
const middleware =[thunk,saga,promise]

if(process.env.ENVIRONMENT !== 'production'){
  middleware.push(logger);
}


const store = createStore(
  appReducers,
  applyMiddleware(thunk),
)
ReactDOM.render(
  <Provider store={store}>

      <App />

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
