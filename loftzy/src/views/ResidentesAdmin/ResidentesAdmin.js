import React, { Component } from "react";
import SearchBar from "../../componentes/InputWithLabel/InputWithLabel";
import { Card,Grid,TableCell,TableHead,Button,TableBody,TableRow,IconButton } from "@material-ui/core";
import classes from "../ResidentesAdmin/ResidentesAdmin.css";
import Paper from "@material-ui/core/Paper";

import axiosDatabase from "../../Instances/axios-realtime";
import {connect} from "react-redux"
import InputWithLabel from "../../componentes/InputWithLabel/InputWithLabel";
import { BrowserRouter } from "react-router-dom";
import AppBar from "../../componentes/NavBar/NavBar";
import swal from "sweetalert";
import {SendTwoTone} from '@material-ui/icons';
import DeleteIcon from "@material-ui/icons/Delete";
import * as actionCreators from '../../store/actions/authentication';

const newList = [
  { name: "Menu", url: "/AdminMenu" },
  { name: "Pagos", url: "RegPago" },
];

class ResidentesAdmin extends Component {



  constructor() {
    super();
    this.state = {
      usuarios: [],
      headers: ["Nombre", "Tipo Inmueble","Celular", "Número Inmueble", "Si Propietario?", "Acciones"],
        nombre: "",
        tipo_inmueble: "",
        numero: "",
        sipropietario: "",
        correo:"",
        password:"",
        celular:""

    };
  }

  componentDidMount(){
    axiosDatabase.get(".json")
    .then((resultado)=>{
      if(resultado.data.Residentes){
        this.setState({
          usuarios:resultado.data.Residentes
        })
      }}).catch(err=>{
      this.setState({
        usuarios:[]
      })
    })
  }

   createData= ()=> {
    let nombre = this.state.nombre;
    let tipo_inmueble = this.state.tipo_inmueble;
    let numero = this.state.numero;
    let sipropietario = this.state.sipropietario;
    let celular= this.state.celular
    const userData = {
      email: this.state.correo,
      password: this.state.password,
  };

    this.props.onSignUp(userData, ()=>{
      let data = { nombre, tipo_inmueble, numero, sipropietario,celular };
    axiosDatabase.put("Residentes/"+this.state.usuarios.length+".json", {"id":this.props.createdUser,"nombre":nombre,"tipo_inmueble":tipo_inmueble,"numero":numero,"sipropietario":sipropietario,"celular":celular})
    axiosDatabase.put("Users/"+this.props.createdUser+".json",{"name":nombre,"rol":"residente"})
    let update = [...this.state.usuarios];
    update.push(data);
    this.setState({
      usuarios: update,
    });
    })


  }

  DeleteData= (index)=> {
    let update = [...this.state.usuarios];
    swal({
      title: "¿Estas Seguro?",
      text: "Al borrar no se va a poder recuperar este registro",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Listo! se ha borrado el registro con exito", {
          icon: "success",
        });
         update.splice(index, 1);
        axiosDatabase.get("Residentes/"+index+".json").then(response=>{
            axiosDatabase.delete("Users/"+response.data.id+".json")
        })
          axiosDatabase.delete("Residentes/"+index+".json");
          axiosDatabase.put("Residentes.json", update);

        this.setState({
          usuarios: update,
        });
      } else {
        swal("Eso estuvo cerca!",{
        icon: "warning",
        buttons: true
        });
      }
    });
  }

  render() {
    return (
      <div>

        <AppBar list={newList} />
        {this.props.error}
        <BrowserRouter>
          <Grid container direction="row">
            <Grid className={classes.coloresp} item xs={0} sm={2}></Grid>
            <Paper
              className={classes.paper}
              // style={{ padding: 5, margin: "auto", width: "auto" }}
              elevation={3}
            >
              <Grid item xs={12} sm={12} spacing={1}>
              <label className={classes.busca}>Ingrese nombre de residente a buscar:</label>
              <Card className={classes.box}>
                  <SearchBar
                    label="Nombre:"
                    placeholder="buscar"
                    // onChange={(event) => this.setState({ id: event.target.value })}
                    />

                </Card>
                <TableHead className={classes.titl}>
                {this.state.headers.map((header) => {
                  return <TableCell className={classes.celda}>{header}</TableCell>;
                  // <TableCell align="right">{header}</TableCell>;
                  // <ListItems usuarios={header} />;
                })}
                </TableHead>
                <TableBody className={classes.table}>
              {this.state.usuarios.map((user, index) => (
                <TableRow key={user.name}>


                  <TableCell align="center">{user.nombre}</TableCell>
                  <TableCell align="center">{user.tipo_inmueble}</TableCell>
                  <TableCell align="center">{user.celular}</TableCell>

                  <TableCell align="center">{user.numero}</TableCell>
                  <TableCell align="center">{user.sipropietario}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => this.DeleteData(index)}>
                      <DeleteIcon />
                    </IconButton>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
                {/* <ListItems usuarios={this.state.usuarios} /> */}
              </Grid>
            </Paper>

            <Grid className={classes.coloresp} item xs={0} sm={2}>
            <Card className={classes.create}>
            <label className={classes.agrega}>Ingresar Residente nuevo:</label>
              <Card className={classes.items}>
              <InputWithLabel
                  label="Correo:"
                  type="email"
                  placeholder="ingrese nombre"
                  onChange={(event) => this.setState({ correo: event.target.value })}
                />
                <SearchBar
                  label="Password:"
                  type="password"
                  placeholder="ingrese nombre"
                  onChange={(event) => this.setState({ password: event.target.value })}
                />
                <SearchBar
                  label="Celular:"
                  placeholder="ingrese Celular"
                  onChange={(event) => this.setState({ celular: event.target.value })}
                />
                <SearchBar
                  label="Nombre:"
                  placeholder="ingrese nombre"
                  onChange={(event) => this.setState({ nombre: event.target.value })}
                />
                <SearchBar
                  label="Inmueble:"
                  placeholder="ingrese tipo inmueble"
                  onChange={(event) => this.setState({ tipo_inmueble: event.target.value })}
                />
                <SearchBar
                  label="Número:"
                  placeholder="Número inmueble"
                  onChange={(event) => this.setState({ numero: event.target.value })}
                />
                <SearchBar
                  label="Propietario:"
                  placeholder="Si o No"
                  onChange={(event) => this.setState({ sipropietario: event.target.value })}
                />
                <div className={classes.boton}>
                <Button variant="contained" size="medium" endIcon={<SendTwoTone/>} onClick={this.createData}>Agregar</Button>
                </div>
              </Card>
              </Card>
            </Grid>

          </Grid>

          {/* </Grid> */}
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      error: state.authenticationStore.error,
      createdUser: state.authenticationStore.createdUser
  }
}
const mapDispatchToProps = dispatch => {
  return {
      onSignUp: (authData, onSuccessCallback) => dispatch(actionCreators.createAccount(authData, onSuccessCallback)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResidentesAdmin);
