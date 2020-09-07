import React, { useState } from "react";
import NewTodo from "./components/newTodo/NewTodo";
import TodoList from "./components/todoList/TodoList";
import styles from "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function changeComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1 className={styles.header}>To Do List</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} changeComplete={changeComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
