import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BK } from './components/books/BK';

const preloadStore = {
};

const store = createStore(
  reducer,
  preloadStore,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BK} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
</Provider>
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
