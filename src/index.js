import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';
import { reduxStore } from "./redux/store"
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={reduxStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
