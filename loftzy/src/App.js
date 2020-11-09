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
import NuevoPost from "./views/NuevoPostF/NuevoPost.js"
import PostComplete from "./views/Foro/PostComplete";
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyAE2q_QFrpdUH7hx6HORQ9v1h2bdAamm6U",
  authDomain: "foroposts.firebaseapp.com",
  databaseURL: "https://foroposts.firebaseio.com",
  projectId: "foroposts",
  storageBucket: "foroposts.appspot.com",
  messagingSenderId: "205327894619",
  appId: "1:205327894619:web:76e2f4c53afbb41f30977e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
          <Route path="/AdminMenu">
          {this.auth("admin",<AdminMenu />)}
          </Route>
          <Route path="/RegPago">
            <RegPagoAdmin />
          </Route>
          <Route path="/Foro">
            <Foro />
          </Route>
          <Route path="/NuevoPost">
            <NuevoPost/>
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route
            path="/post/:id"
            exact
            render={(props) => <PostComplete {...props}/>}
          />
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
