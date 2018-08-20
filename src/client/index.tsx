import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './views/components/app/app';

const store = applyMiddleware(thunk)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
