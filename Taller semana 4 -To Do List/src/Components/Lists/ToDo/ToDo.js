import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render() {
    return (
      <div className="task">
        <p>{this.props.text}</p>
        <button type="button" className="btn btn-success" onClick={() => { this.props.onClick(this.props.id, 1) }}>
          <i className="fa fa-check"></i>
        </button>
      </div>
    );
  }
}
export default ToDo;
