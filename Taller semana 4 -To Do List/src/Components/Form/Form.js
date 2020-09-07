import React, { Component } from 'react';
import Formcss from "./Form.css"
import Appcss from '../../App.css';
import icons from "../../extras/fontawesome-free/css/all.min.css";

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
        <input type="text" placeholder="New ToDo" value={this.state.value}
          onChange={((e) => this.setState({ value: e.target.value }))} />
        <button type="submit" className={`${Appcss["btn-success"]} ${Formcss["btn-plus"]}`} >
          <i className={`${icons.fa} ${icons["fa-plus"]}`}></i>
        </button>
      </form>
    );
  }
}
export default Form;
