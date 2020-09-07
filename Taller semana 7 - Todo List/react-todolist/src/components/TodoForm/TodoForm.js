import React, { Component } from "react";
import styles from "./TodoForm.module.css";
import logo from "../../assets/images/plus-solid.svg";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <form id="todoform" onSubmit={this.handleSubmit}>
          <button className={`${styles.boton} hvr-grow`} type="submit">
            <img className={styles.img} src={logo} />
          </button>
          <input
            className={styles.input}
            type="text"
            onChange={this.handleChange}
            placeholder="Tarea"
          />
        </form>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo !== "") {
     
      this.props.addFn(this.state.todo);
      document.getElementById("todoform").reset();
      this.setState({ todo: "" });
    }
  };
}

export default TodoForm;
