import React, { Component } from "react";
import InfoCard from "../../componentes/InfoCard/InfoCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBar from "../../componentes/NavBar/NavBar";
import classes from "../inicioResidente/inicioResidente.css";

const newList = [
  { name: "Pago Administracion", url: "/RegPago" },
  { name: "Foro", url: "/Foro" },
];
class inicioResidente extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar list={newList} />
        <div className={classes["body"]}>
          <InfoCard
            name="residente"
            phone="+57 ### ### ####"
            numberH="10#"
          ></InfoCard>
          <div className={classes.buttons}>
            <Link to="/RegPago">
              <Button m={2} size="large" variant="contained" po>
                Pago administracion
              </Button>
            </Link>
            <Link to="/Foro">
              <Button m={2} size="large" variant="contained">
                Foro Residencial
              </Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default inicioResidente;
