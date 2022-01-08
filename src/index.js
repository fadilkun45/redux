import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

// Redux tediri dari berberapa Bagian Yaitu action,reducer,store
// pertama component request action lalu setelah itu return dari action di dispatch di reducer dan dari reducer di taruh di store untuk selanjut nya digunakan berbagai component

ReactDOM.render(

  <Provider store={store}>
        <App />
  </Provider>
  , document.getElementById('root')
);
