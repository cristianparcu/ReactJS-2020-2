import React, { Component } from "react";
import classes from "../RegPagoAdmin/RegPagoAdmin.css";
import RegPago from "../../componentes/RegPago/RegPago.js";
import axios from "axios";
import AppBar from "../../componentes/NavBar/NavBar";
import Spinner from "../../componentes/Spinner/Spinner"

const newList = [
  { name: "Perfil", url: "/residenteIng" },
  { name: "Foro", url: "/Foro" },
];

class RegPagoAdmin extends Component {
  state = {
    regs: [],
    loading:false,
  };
  componentDidMount() {
   this.getPost()
  }

  getPost(){
    this.setState({
      loading:true
    })
    setTimeout(() => {
      axios.get("https://mi-primer-test-firebase.firebaseio.com/.json").then((res) => {
        this.setState({
          regs: res.data,
          loading:false
        });
      });
    }, 1500);
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
          <h1>Pago Administración</h1>
          <ul className={classes["todo-list"]}>{this.state.loading ? <Spinner /> :regList}</ul>
        </div>
      </React.Fragment>
      // Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
    );
  }
}
export default RegPagoAdmin;
