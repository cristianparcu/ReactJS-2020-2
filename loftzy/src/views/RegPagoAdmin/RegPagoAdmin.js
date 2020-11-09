import React, { Component } from "react";
import classes from "../RegPagoAdmin/RegPagoAdmin.css";
import RegPago from "../../componentes/RegPago/RegPago.js";
import axios from "axios";
import AppBar from "../../componentes/NavBar/NavBar";

const newList = [
  { name: "Perfil", url: "/residenteIng" },
  { name: "Foro", url: "/Foro" },
];

class RegPagoAdmin extends Component {
  state = {
    regs: [],
  };
  componentDidMount() {
    axios.get("./RegPagoAdmin.json").then((res) => {
      console.log(res);

      this.setState({
        regs: res.data.slice(0, 6),
      });
    });
  }

  render() {
    const { regs } = this.state;
    const regList = regs.length ? (
      regs.map((reg) => {
        return <RegPago date={reg.date} price={reg.price} />;
      })
    ) : (
      <div>No hay registros de pago</div>
    );
    return (
      <React.Fragment>
        <AppBar list={newList} />
        <div className={classes["app"]}>
          <h1>Pago Administracion</h1>
          <ul className={classes["todo-list"]}>{regList}</ul>
        </div>
      </React.Fragment>
      // Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
    );
  }
}
export default RegPagoAdmin;
