import React, { Component } from 'react';
import classes from './App.css';
import Card from './Components/Card';
import ToDoForm from './Components/ToDoForm';
import { render } from '@testing-library/react';

const todos = [];

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos
    }

  }

  handleAddTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
    console.log(this.state)
  }
  removeCard = (index) => {

    if (window.confirm("¿Estas seguro de querer eliminarla?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }

  }
  render() {
    const todos = this.state.todos.map((todo, i) => {

      return (
        <Card title={todo.title} priority={todo.priority} description={todo.description} key={i} removeC={this.removeCard.bind(this, i)}></Card>

      )


    })
    return (
      <div className={classes.App}>
        
        <nav className={classes.nav}>
          <a>Tareas </a>
          <span className={classes.numT}>
            {
              this.state.todos.length
            }
          </span>
           </nav>
       
      
        <div className={classes.body}>
          <ToDoForm onAddTodo={this.handleAddTodo}></ToDoForm>
        </div>
        <div className={classes.body}>
          <div className={classes.grid}>

            {todos}
          </div>
        </div>

      </div>

    )

  }
}

export default App;
