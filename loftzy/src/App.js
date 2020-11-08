import React, { Component } from "react";
import "./App.css";
import Inicio from "./views/inicio/inicio.js";
import AdminMenu from "./views/AdminMenu/AdminMenu";
import ResidentesAdmin from "./views/ResidentesAdmin/ResidentesAdmin.js";
import InicioResidente from "./views/inicioResidente/InicioResidente";
import RegPagoAdmin from "./views/RegPagoAdmin/RegPagoAdmin";
import NotFound from "./views/NotFound/NotFound";
import Foro from "./views/Foro/Foro.js";
import NotAuthorized from "./views/NotAuthorized/NotAuthorized"
import Celador from "./views/Celador/Celador";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/authentication';
export class App extends Component {
  
  componentDidMount = () => {
    this.props.onPersistAuthentication();
  }

  auth=(rol,nextComponent)=>{
    if(this.props.rol===rol){
      return nextComponent;
    }else{
      return(
        <NotAuthorized/>
      );
    }
  }
  render() {
    
    return (
      <Router>
        <Switch>
          <Route path="/Celador">
            {this.auth("celador",<Celador />)}
          </Route>
          <Route path="/residenteIng">
            
          {this.auth("residente",<InicioResidente />)}

          </Route>
          <Route path="/AdminResidentes">
            <ResidentesAdmin />
          </Route>
          <Route path="/admin">
          {this.auth("admin",<AdminMenu />)}
          </Route>
          <Route path="/RegPago">
            <RegPagoAdmin />
          </Route>
          <Route path="/Foro">
            <Foro />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch( actionCreators.persistAuthentication() )
  };
};
const mapStateToProps = state => {
  return {
      rol: state.authenticationStore.userLoggedIn.rol
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
