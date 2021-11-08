import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore,combineReducers ,applyMiddleware} from "redux";

import { ProductsReducer } from "./reducer/ProductsReducer";
import thunk from "redux-thunk";
import DetailsReducer from './reducer/DetailsReducer';


const rootReducer = combineReducers({
  "products":ProductsReducer,
  "details":DetailsReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
