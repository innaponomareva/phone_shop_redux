import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import AppReducer from './store/AppReducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'material-design-icons/iconfont/material-icons.css';


const store = createStore(AppReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
