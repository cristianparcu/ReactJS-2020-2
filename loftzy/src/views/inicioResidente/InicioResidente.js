import React, { Component } from "react";
import InfoCard from "../../componentes/InfoCard/InfoCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBar from "../../componentes/NavBar/NavBar";
import classes from "../inicioResidente/inicioResidente.css";
import { connect } from 'react-redux';
import axiosDatabase from "../../Instances/axios-realtime";


const newList = [
  { name: "Pago Administracion", url: "/RegPago" },
  { name: "Foro", url: "/Foro" },
];
class inicioResidente extends Component {

  state={
    userName:"",
    userHouseN:"",
    userPhone:"",
  }

  componentDidMount(){
    axiosDatabase.get("Residentes.json")
    .then((respuesta)=>{
      let user = respuesta.data.filter(user=> user.id===this.props.localId)
      console.log(user)
        this.setState({
          userName:user[0].nombre,
          userHouseN:user[0].numero,
          userPhone:user[0].celular
        })
      })
  }


  render() {
    return (
      <React.Fragment>
        <AppBar list={newList} />
        <div className={classes["body"]}>
          <InfoCard
            name= {this.state.userName}
            phone={this.state.userPhone}
            numberH={this.state.userHouseN}
          ></InfoCard>
          <div className={classes.buttons}>
            <Link to="/RegPago" style={{ textDecoration: 'none' }}>
              <Button  m={2} size="large" variant="contained" po>
                Registro pago administración
              </Button>
            </Link>
            <Link to="/Foro" style={{ textDecoration: 'none' }}>
              <Button  m={2} size="large" variant="contained">
                Foro Residencial
              </Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
      localId: state.authenticationStore.userLoggedIn.localId
  }
}

export default connect(mapStateToProps, null) (inicioResidente);