import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "mobx-react";
import ukStore from './stores/UKStore';
import ekdbStore from './stores/EKDBStore';

ReactDOM.render(
  <BrowserRouter>
    <Provider ukStore={ukStore} ekdbStore={ekdbStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
