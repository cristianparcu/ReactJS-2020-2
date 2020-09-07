import React from "react";
import Todo from "../todo/Todo";
import style from "./TodoList.css";

export default function todoList({ todos, changeComplete, removeTodo }) {
  return (
    <ul className={style.todoList}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} changeComplete={changeComplete} removeTodo={removeTodo} className={style.centered} />
      ))}
    </ul>
  );
}
