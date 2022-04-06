import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import myStore from "./store/Store"
import allReducers from "./reducers/index"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./store/Store"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
   
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

