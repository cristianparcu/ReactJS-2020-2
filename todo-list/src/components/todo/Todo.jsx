import React from "react";
import styles from "./Todo.css";

export default function Todo({ todo, changeComplete, removeTodo }) {
  function handleCheckboxClick() {
    changeComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className={styles.todos}>
      <input type="checkbox" onClick={handleCheckboxClick} className={styles.checkbox} />
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          color: "white",
          marginRight: "10px",
        }}
      >
        {todo.todo}
      </li>
      <button onClick={handleRemoveClick} className={styles.deleteButton}>
        X
      </button>
    </div>
  );
}
