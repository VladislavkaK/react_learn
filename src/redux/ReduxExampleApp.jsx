import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Container from './Container';
import TodoListContainer from '../components/TodoListContainer';

import './style.css'

class ReduxExampleApp extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="ReduxExampleApp">
          <h1>ReduxExampleApp</h1>
          <Container />
          <h1>TODO list</h1>
          <TodoListContainer />
        </div>
        
      </Provider>
    );
  }
}

export default ReduxExampleApp;
