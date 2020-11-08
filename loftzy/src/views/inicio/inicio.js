import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import InputWithLabel from "../../componentes/InputWithLabel/InputWithLabel";
import classes from "./inicio.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { ReactComponent as House } from "./login.svg";
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/authentication';


class Inicio extends Component {
   state = {
      isUserLoggedIn: this.props.isUserLoggedIn,
      email: "",
      password: "",
      Redirect: false,
      error: this.props.error
    };

    
    
    componentDidUpdate () {
      if (this.state.isUserLoggedIn) {
          this.redirectRol();
      }
  }
  componentWillReceiveProps (nextState) {
    this.setState({
        isUserLoggedIn: nextState.isUserLoggedIn
    });
}
  handleClick = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
  };

  this.props.onUserLogin(userData, () => {
    this.redirectRol();
  });
  };

  redirectRol=()=>{
    if (this.props.rol==="admin") {
      this.setState({
        Redirect: "/AdminMenu",
      });
    } else {
      if (
       this.props.rol==="residente"
      ) {
        this.setState({
          Redirect: "/residenteIng",
        });
      } else {
        if (
         this.props.rol==="celador"
        ) {
          this.setState({
            Redirect: "/Celador",
          });
        }
      }
    }
  }
  updateLoginInfo=(event,type)=>{
    var updatedLoginInfo = {
      ...this.state
    }

    updatedLoginInfo[type] = event.target.value;

    this.setState({
      email: updatedLoginInfo.email,
      password: updatedLoginInfo.password
    });
  }

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
              onChange={(event) => {this.updateLoginInfo(event,'email')}}
            ></InputWithLabel>
            <InputWithLabel
              label="Contraseña"
              type="password"
              onChange={(event) =>
                {this.updateLoginInfo(event,'password')}
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
const mapStateToProps = state => {
  return {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      loadingAuth: state.authenticationStore.loadingAuth,
      error: state.authenticationStore.error,
      rol: state.authenticationStore.userLoggedIn.rol
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
