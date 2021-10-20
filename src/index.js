import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";
import {NavigationStateStore} from "./store/NavigationStateStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={NavigationStateStore}>
    <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);