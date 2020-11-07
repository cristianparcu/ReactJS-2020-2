import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import InputWithLabel from "../../componentes/InputWithLabel/InputWithLabel";
import classes from "./inicio.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { ReactComponent as House } from "./login.svg";
import { connect } from 'react-redux';



class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      Redirect: false,
    };
  }
  handleClick = () => {
    if (this.state.email === "admin" && this.state.password === "admin") {
      console.log("in");
      this.setState({
        Redirect: "/admin",
      });
    } else {
      if (
        this.state.email === "residente" &&
        this.state.password === "password"
      ) {
        this.setState({
          Redirect: "/residenteIng",
        });
      } else {
        if (
          this.state.email === "celador" &&
          this.state.password === "password"
        ) {
          this.setState({
            Redirect: "/Celador",
          });
        }
      }
    }
  };

  render() {
    if (this.state.Redirect) {
      return <Redirect to={this.state.Redirect} />;
    } else {
      return (
        <div className={classes.inicioContainer}>
          <House className={classes.bg} />
          <Card className={classes.box} p={4}>
            <InputWithLabel
              label="Correo"
              onChange={(event) => this.setState({ email: event.target.value })}
            ></InputWithLabel>
            <InputWithLabel
              label="Contraseña"
              type="password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            ></InputWithLabel>
            <Button
              m={2}
              size="large"
              color="primary"
              variant="contained"
              onClick={this.handleClick}
            >
              Iniciar
            </Button>
          </Card>
        </div>
      );
    }
  }
}

export default Inicio;
