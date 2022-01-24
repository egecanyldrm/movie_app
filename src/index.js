import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss'
import reportWebVitals from './reportWebVitals';
import AppRouter from './Routers/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
