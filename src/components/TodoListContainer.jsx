import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

class todoListContainer extends Component {

    render() {

        // let { state } = this.props;
        
        return (
            
          <div className="todoList__Container">
            <TodoList />
          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'state': state
    };

}

export default connect(mapStateToProps, null)(todoListContainer);
