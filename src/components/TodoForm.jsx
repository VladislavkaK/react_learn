import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Компонент формы(само поле и кнопка добавить) */

export default class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {task: ''};
    }
    
    updateText = (e => {
      this.setState({task: e.target.value});
    });
    
    submitForm = (e => {
      e.preventDefault();
      let item = e.target[0].value;
      
      if (item) {
       this.props.submitAction(item);

       //после каждого добавления задачи обнулять поле
       this.setState({task: ''}); 
      }
    });
    
    render() {
        
      return (
        <form
          onSubmit={this.submitForm}
          className="todo-form">
          <input
            type="text"
            placeholder="Введите задачу"
            onChange={this.updateText}
            value={this.state.task} />
          <input type="submit" value="Добавить" />
        </form>
      );
    }
}
