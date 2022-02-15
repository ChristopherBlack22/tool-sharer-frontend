import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

//const store = createStore(GIVE A REDUCER NAME, window.__REDUX__DEVTOOLS_EXTENSION&&window.__REDUX__DEVTOOLS__EXTENSION__());

ReactDOM.render(
  // <Provider store={ store }>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </ Provider>
  document.getElementById('root')
);