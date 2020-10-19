import React, { Component } from "react";
import classes from "./inputWithLabel.css";

class InputWithLabel extends Component {
  render() {
    return (
      <div className={classes.inputDiv}>
        <label className={classes.inputLabel}> {this.props.label}</label>
        <input
          className={classes.inputBox}
          onChange={this.props.onChange}
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputWithLabel;
