import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import List from './List';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [
          'Задача 1',
          'Задача 2',
          'Задача 3',
          'Задача 4',
          'Задача 5'
        ]
      };
    }
    
    addItem = (item => {
      let newItems = this.state.items;
      
      newItems.push(item);
      // console.log(newItems)
      this.setState({items: newItems});
    });
    
    deleteItem = (idx => {
      let newItems = this.state.items;
      newItems.splice(idx, 1);
      this.setState({items: newItems});
    });
    
    render() {
      
      return (
        <div className="todo-list">
          <TodoForm submitAction={this.addItem} />
          <List items={this.state.items} clickAction={this.deleteItem} />
        </div>
      );
    }
  }

  export function mapDispatchToProps(dispatch) {

    return {
      addItem(item) {

          dispatch({type: 'ADD_ITEM', payload: { item } });

      }
    }
}

export default connect(null, mapDispatchToProps)(TodoList);