import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import {compose} from 'redux';   // applyMiddleware в классическом redux позволяет подключать middleware | если @reduxjs/toolkit то не надо подключать
import { Provider } from 'react-redux';

import App from './App';
import { rootReducer } from './redux/rootReducer';

const store = configureStore({reducer: rootReducer}, compose(  // configureStore взято из @reduxjs/toolkit (не классический redux)
  // applyMiddleware(                                             // можно без подключения applyMiddleware  thunk
  //     thunk                                                   
  // ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
