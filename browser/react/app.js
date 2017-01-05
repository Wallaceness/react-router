'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import  {Router, Route, hashHistory, IndexRedirect} from 'react-router';
//import IndexRedirect from 'react-router';
import AppContainer from './containers/AppContainer';
import Album from './components/Album';
import AlbumsContainer from './containers/AlbumsContainer';

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
  <Route path="/" component={AppContainer} />
  <IndexRedirect to="/albums" />
  <Route path="/albums" component={AlbumsContainer} />
  <Route path="albums/:albumId" component={Album} />
  </Router>
  </Provider>,
  document.getElementById('app')
);