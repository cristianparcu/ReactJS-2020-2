import React, { Component } from "react";

import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import Title from "./components/Title/Title";
import style from "./App.module.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      this.setState({ todos: storedTodos });
    } else {
      console.log("No hay todos almacenados");
    }
  };

  addTodo = async (todo) => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
  updateTodo = async (iTodo) => {
    await this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (iTodo === todo) {
          return {
            text: todo.text,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
  deleteTodo = async (id) => {
    const newArray = [...this.state.todos];
    newArray.splice(id, 1);
    await this.setState({
      todos: newArray,
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
  render() {
    return (
      <>
        <div className={style.container}>
          <Title>To Do List</Title>
          <TodoForm addFn={this.addTodo} />
          <Title>Tareas:</Title>
          <TodoList
            deleteFn={this.deleteTodo}
            updateFn={this.updateTodo}
            todos={this.state.todos}
          />
        </div>
      </>
    );
  }
}

export default App;
