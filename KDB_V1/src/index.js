import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "mobx-react";
import UKStore from "./stores/UKStore";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Provider ukStore={UKStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
