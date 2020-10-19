import React, { Component } from "react";
import SearchBar from "../../componentes/InputWithLabel/InputWithLabel";
import { Grid } from "@material-ui/core";
import classes from "../ResidentesAdmin/ResidentesAdmin.css";
import Paper from "@material-ui/core/Paper";
// import TextArea from "../../componentes/TextArea/TextArea";
import axios from "../../Instances/axiosInstance";
import ListItems from "../../componentes/ListItems/ListItems";
import { BrowserRouter } from "react-router-dom";
import AppBar from "../../componentes/NavBar/NavBar";

const newList = [
  { name: "Menu", url: "/AdminMenu" },
  { name: "Pagos", url: "RegPago" },
];

class ResidentesAdmin extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
      ResidentInfo: {
        nombre: "",
        tipo_inmueble: "",
        numero: "",
        foto: "",
      },
    };
  }

  componentDidMount() {
    axios.get("/users").then((response) => {
      const nusuarios = response.data.slice(0, 5);
      this.setState({ usuarios: nusuarios }, () => {
        console.log("usuarios de axius");
        console.log(this.state.usuarios);
        //enviar()
      });
    });
  }

  // enviar = () =>{
  //  this.state.usuarios

  //   }

  //   }

  // async componentDidMount() {
  //   const response = await fetch(axios.get('/users')
  //       .then(response => {
  //         const usuarios = response.data.slice(0,5);

  //         const updatedusers = usuarios.map(user => {
  //           return {
  //             nombre: user.nombre,
  //             tipo_inmueble: user.tipo_inmueble,
  //             numero: user.numero,
  //             foto: user.foto
  //           }
  //         })};
  //   const json = await response.json();
  //   this.setState({ usuarios: json });
  //   console.log("usuarios de axius");
  //       console.log(json)
  // }

  // usuarioslis = (userindex) =>{
  //   return this.state.usuarios(userindex);
  // }

  render() {
    console.log("usuarios al dibujar");
    console.log(this.state.usuarios);
    return (
      // <Grid container direction='row' spacing={1}>
      <div>
        <AppBar list={newList} />
        <BrowserRouter>
          <Grid container direction="row">
            <Grid className={classes.coloresp} item xs={0} sm={2}></Grid>
            <Paper
              style={{ padding: 5, margin: "auto", width: "auto" }}
              elevation={3}
            >
              <Grid item xs={12} sm={8} spacing={1}>
                <SearchBar
                  placeholder="buscar"
                  label="ingrese residente:"
                ></SearchBar>
                {/* <TextArea items={(userindex) => this.usuarioslis(userindex)}></TextArea> */}
                {/* <TextArea items={this.state.usuarios.map(usuario =>{usuario.nombre} )}></TextArea> */}
                {/* <TextArea items={() => this.usuarios}></TextArea> */}
                {/* <ListItems items={this.state.usuarios}></ListItems> */}
                {/* <Route path="/" exact render = {() => <ListItems usu={this.state.usuarios} />} /> */}
                <ListItems usuarios={this.state.usuarios} />
              </Grid>
            </Paper>
            <Grid className={classes.coloresp} item xs={0} sm={2}></Grid>
            {/* <FormRow /> */}
          </Grid>

          {/* </Grid> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default ResidentesAdmin;
