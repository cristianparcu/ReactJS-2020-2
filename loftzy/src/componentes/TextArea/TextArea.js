import React, { Component } from "react";
import classes from "../TextArea/TextArea.css";
import Card from "@material-ui/core/Card";
// import { ListItem } from '@material-ui/core';
// import ListItems from '../ListItems/ListItems.js';

class TextArea extends Component {
  render() {
    // const usuarios =this.props.items;
    console.log("usuarios de TextArea");
    console.log(this.props.nombre);
    return (
      <Card>
        <tr className={classes["tr"]} key={this.props.i}>
          <td className={classes["td"]}>
            <h4>{this.props.nombre}</h4>
          </td>
          <td className={classes["td"]}>
            <p>{this.props.tipo_inmueble}</p>
          </td>
          <td className={classes["td"]}>
            <p>{this.props.numero}</p>
          </td>
          <td className={classes["td"]}>
            <p>{this.props.foto}</p>
          </td>
        </tr>
      </Card>
    );
  }
}

export default TextArea;
