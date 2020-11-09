import React, { Component } from "react";

import ButtonAdmin from "../../componentes/MenuButton/ButtonMenu";
import AppBar from "../../componentes/NavBar/NavBar";
import classes from "./AdminMenu.css";

import {connect} from "react-redux"


import { Link } from "react-router-dom";

const newList = [
  { name: "Residentes", url: "/AdminResidentes" },
  { name: "menu", url: "/AdminMenu" },
];


class AdminMenu extends Component {
 
  menu() {
    return(
    <div>
        <AppBar list={newList} />
        <div className={classes["buttons"]}>
          <Link to="/AdminResidentes" style={{ textDecoration: 'none' }}>
            <ButtonAdmin
              className={classes["button"]}
              title="Residentes"
              logo="https://static.thenounproject.com/png/218676-200.png"
            ></ButtonAdmin>
          </Link>
          <Link to="/NuevoPost" style={{ textDecoration: 'none' }}>
          <ButtonAdmin
          className={classes["button"]}
          title="Foro"
          logo="https://image.flaticon.com/icons/png/512/14/14409.png"
          >
          </ButtonAdmin>
          </Link>
        </div>
      </div>
      )
  }
  render() {
    return (
     this.menu()
    );
  }

  
}
const mapStateToProps = state => {
  return {
      rol: state.authenticationStore.userLoggedIn.rol
  }
}
export default connect(mapStateToProps, null)(AdminMenu);
