import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from '../components/TodoForm';
import List from '../components/List';

class TodoList extends React.Component {
 
    addItem = (item => {
    
      this.props.addItem(item)

    });
    
    deleteItem = (idx => {
  
      this.props.delItem(idx)

    });
    
    render() {

      let items = this.props.items;
      // console.log(items)
      return (
        <div className="todo-list">
          <TodoForm submitAction={this.addItem} />
          <List items={items} clickAction={this.deleteItem} />
        </div>
      );
    }
  }

  export function mapDispatchToProps(dispatch) {

    return {
      addItem(item) {

          dispatch({type: 'ADD_ITEM', payload: { value: item } });

      },
      delItem(id) {

          dispatch({type: 'DELETE_ITEM', payload: { id } });

      }
    }
}

export function mapStateToProps(state) {

    return {
        'items': state.todo.items
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);