import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Component/Root'

import FilterOptions from './Component/FilterOptions'
import registerServiceWorker from './registerServiceWorker';
import './build.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Root />,  document.getElementById('root'));
registerServiceWorker();
