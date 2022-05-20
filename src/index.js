import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
// import {compose} from 'redux';   // applyMiddleware в классическом redux позволяет подключать middleware | если @reduxjs/toolkit то не надо подключать
import { Provider } from 'react-redux';

import App from './App';
import { rootReducer } from './redux/rootReducer';
import { forbiddenWordsMiddleware } from './redux/middleware';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()             // saga это теперь middleware

const store = configureStore({
  reducer: rootReducer, 
  middleware: [                          // добавляем кастомный middleware
    thunk,
    forbiddenWordsMiddleware,
    saga                                 // добавляем сагу
  ]                          
},
  // compose(                                                     // configureStore взято из @reduxjs/toolkit (не классический redux)
  // applyMiddleware(                                             // можно без подключения applyMiddleware  thunk
  //     thunk                                                   
  // ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()      // в '@reduxjs/toolkit' эта строка не обязательна
)

saga.run(sagaWatcher)             // привязываем вотчер

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
