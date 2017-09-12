import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

let store = createStore(reducers);


//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.querySelector('.container')
 );
