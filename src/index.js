import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers'
import router from './router';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
