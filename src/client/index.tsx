import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'

import App from './views/components/app/app'

const store = applyMiddleware(thunk)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);
