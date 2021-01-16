//React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import App from './App';

//Redux
import store from './store';
import { Provider } from 'react-redux';

//ServiceWorker
import * as serviceWorker from './serviceWorker';

/* BOOTSTRAP */
import './scss/app.scss';

//axios
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//Base Url
//window.axios.defaults.baseURL = window.location.protocol + "//" + window.location.host;
window.axios.defaults.baseURL = window.location.protocol + '//gedure8000.run-us-west2.goorm.io/api';

ReactDOM.render(
  <Provider store={store}>
    <Router
			getUserConfirmation={(message, callback) => {
				// this is the default behavior
				const allowTransition = window.confirm(message);
				callback(allowTransition);
			}}
		>
      <App/>
    </Router>
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();