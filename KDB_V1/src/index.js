import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "mobx-react";
import ukStore from "./stores/UKStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider ukStore={ukStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
