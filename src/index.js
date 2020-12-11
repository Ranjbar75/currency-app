import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from './App.js';
import Gold from './Gold.js';


ReactDOM.render(
  <React.StrictMode>
      <div className="currency-body">
          <App />
          <Gold />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
