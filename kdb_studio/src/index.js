import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import EkdbStore from './ekdb/store/EkdbStore';
import UkStore from './uk/store/UkStore';

ReactDOM.render(
  <BrowserRouter>
    <Provider ekdbStore={EkdbStore} ukStore={UkStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
