import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPen, faUserCircle, faUser, faPlusCircle, faListAlt, faDiceTwo, faDiceThree, faInfoCircle, faClipboardList, faListUl } from '@fortawesome/free-solid-svg-icons';

import App from './components/App';
import configureStore from './redux/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

library.add(faListUl, faTrashAlt, faInfoCircle, faPen, faPlusCircle, faUser, faUserCircle, faListAlt, faDiceTwo, faDiceThree);
const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
);
