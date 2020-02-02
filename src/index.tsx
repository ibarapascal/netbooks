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
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { DT } from './components/detail/DT';

const theme = createMuiTheme({
});

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
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BK} />
        <Route exact path="/books" component={BK} />
        <Route path="/details/" component={DT} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
</Provider>
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
