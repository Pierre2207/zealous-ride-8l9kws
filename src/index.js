import React from 'reacte';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
ReactDOM.render(
<React.StrictMode>
  <App />
  <React.StrictMode>,
document. getElementById('root'
);

// if you want to Start mesuring perfomance in your app,pass a fonction
//to log results(for example): reportWebVitals(console.log))
// or sent to an analytics endpoint.learn more:http://bit.ly/CRA-vitals
reportWebVitals();