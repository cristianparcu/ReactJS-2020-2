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
    axiosDatabase.get("Users/"+this.props.localId+".json")
    .then((rest)=>{
      console.log(rest)
        this.setState({
          userName:rest.data.name,
          userHouseN:rest.data.casa,
          userPhone:rest.data.telefono
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