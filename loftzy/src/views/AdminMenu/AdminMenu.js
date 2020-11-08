import React, { Component } from "react";

import ButtonAdmin from "../../componentes/MenuButton/ButtonMenu";
import AppBar from "../../componentes/NavBar/NavBar";
import classes from "./AdminMenu.css";


import { Link } from "react-router-dom";

const newList = [
  { name: "Residentes", url: "/AdminResidentes" },
  { name: "menu", url: "/admin" },
];

class AdminMenu extends Component {
  render() {
    return (
      <div>
        <AppBar list={newList} />
        <div className={classes["buttons"]}>
          <Link to="/AdminResidentes">
            <ButtonAdmin
              className={classes["button"]}
              title="Residentes"
              logo="https://static.thenounproject.com/png/218676-200.png"
            ></ButtonAdmin>
          </Link>
          <Link to="/RegPago">
            <ButtonAdmin
              className={classes["button"]}
              title="Pago Administracion"
              logo="https://image.flaticon.com/icons/png/512/126/126241.png"
            ></ButtonAdmin>
          </Link>
          <Link to="/Celador">
            <ButtonAdmin
              className={classes["button"]}
              title="Celadores"
              logo="https://mlxbjtxnprgh.i.optimole.com/VMf8KJ8-15xLw27c/w:auto/h:auto/q:auto/https://www.epicfirstsupport.com/wp-content/uploads/2019/09/guard-1.png"
            ></ButtonAdmin>
          </Link>
          <Link to="/NuevoPost">
          <ButtonAdmin
          className={classes["button"]}
          title="Foro"
          logo="https://image.flaticon.com/icons/png/512/14/14409.png"
          >
          </ButtonAdmin>
          </Link>
        </div>
      </div>
    );
  }
}

export default AdminMenu;
