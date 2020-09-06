import React, { Component } from 'react';
import "./Form.css"

class Form extends Component {
  state = { value: "" }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.props.addTask(this.state.value)
      this.setState({ value: "" });
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <input type="text" placeholder="New ToDo"
          value={this.state.value}
          onChange={((e) => this.setState({ value: e.target.value }))} />
        <button type="submit" className="btn-success btn-plus"> <i className="fa fa-plus"></i> </button>
      </form>
    );
  }
}
export default Form;
