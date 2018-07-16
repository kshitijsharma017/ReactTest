import React, { Component } from 'react';
import Route from './src/Route';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './src/reducers';
let store = createStore(Reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
