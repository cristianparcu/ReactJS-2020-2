import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./NewTodo.css";

export default function NewTodo({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    todo: "",
    completed: false,
  });

  const inputChange = (e) => {
    setTodo({ ...todo, todo: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.todo.trim()) {
      addTodo({ ...todo, id: uuid() });
      // reset input
      setTodo({ ...todo, todo: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formMain}>
      <input name="todo" type="text" value={todo.todo} onChange={inputChange} />
      <button type="submit">Add</button>
    </form>
  );
}
