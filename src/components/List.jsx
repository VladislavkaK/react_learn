import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Компонент для списка задач */

export default class List extends React.Component {
 
    render() {
      let listItems = this.props.items.map((item, i) => {

        return (
          <li key={i}>
            <div className="text">{item}</div>
            <button
              onClick={this.props.clickAction.bind(this, i)}>
              Удалить задачу
            </button>
          </li>
        );
      });
      return <ul>{listItems}</ul>
    }
}
