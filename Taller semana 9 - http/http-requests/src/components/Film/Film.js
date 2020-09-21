import React, { Component } from "react";
import Styles from "./Film.module.css"
class Film extends Component {
  render() {
    return (
   
        <div className={Styles.div}>
          <div className={Styles.info}>
            <p>{this.props.nombre}</p>
            <p>{this.props.descripcion}</p>
            <p>{this.props.fecha}</p>
          </div>
          <img className={Styles.img} src={this.props.imagen} alt="Hindi" />
        </div>
    );
  }
}

export default Film;
