import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistStore, persistReducer  } from 'redux-persist'
import thunkMiddleware from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import { Cart, LoginUsers } from './Api/redux-manager/reducers'

const rootReducers = combineReducers({ LoginUsers, Cart })

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['Cart'] // only CartPersistGate  will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), )

const persistor = persistStore(store)


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App/>
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
