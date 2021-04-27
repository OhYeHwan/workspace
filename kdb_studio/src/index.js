import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'
import XsdStore from './stores/XsdStore';

ReactDOM.render(
  <BrowserRouter>
    <Provider xsdStore={XsdStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
