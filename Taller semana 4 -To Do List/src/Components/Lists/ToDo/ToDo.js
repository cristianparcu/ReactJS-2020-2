import React, { Component } from 'react';
import Listcss from "../Lists.css";
import Appcss from "../../../App.css";
import icons from "../../../extras/fontawesome-free/css/all.min.css";

class ToDo extends Component {
  render() {
    return (
      <div className={Listcss.task}>
        <p>{this.props.text}</p>
        <button type="button" className={`${Appcss.btn} ${Appcss["btn-success"]}`} onClick={() => { this.props.onClick(this.props.id, 1) }}>
          <i className={`${icons.fa} ${icons["fa-check"]}`}></i>
        </button>
      </div>
    );
  }
}
export default ToDo;
