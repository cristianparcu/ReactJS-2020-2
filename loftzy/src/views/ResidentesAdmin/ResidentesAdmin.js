import React, { Component } from "react";
import SearchBar from "../../componentes/InputWithLabel/InputWithLabel";
import { Card,Grid,TableCell,TableHead,Button,TableBody,TableRow,IconButton } from "@material-ui/core";
import classes from "../ResidentesAdmin/ResidentesAdmin.css";
import Paper from "@material-ui/core/Paper";

import axiosDatabase from "../../Instances/axios-realtime";

import { BrowserRouter } from "react-router-dom";
import AppBar from "../../componentes/NavBar/NavBar";
import swal from "sweetalert";
import {SendTwoTone} from '@material-ui/icons';
import DeleteIcon from "@material-ui/icons/Delete";

const newList = [
  { name: "Menu", url: "/AdminMenu" },
  { name: "Pagos", url: "RegPago" },
];

class ResidentesAdmin extends Component {

  

  constructor() {
    super();
    this.state = {
      usuarios: [],
      headers: ["Nombre", "Tipo Inmueble", "Número Inmueble", "Si Propietario?", "Acciones"],
        nombre: "",
        tipo_inmueble: "",
        numero: "",
        sipropietario: "",
      
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
    
    
    let data = { nombre, tipo_inmueble, numero, sipropietario };
    
    axiosDatabase.put("Residentes/"+this.state.usuarios.length+".json", {"nombre":nombre,"tipo_inmueble":tipo_inmueble,"numero":numero,"sipropietario":sipropietario}).then(console.log(data))
    let update = [...this.state.usuarios];
    update.push(data);
    this.setState({
      usuarios: update,
    });
  }

  DeleteData= (index)=> {
    console.log(index);
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
        axiosDatabase.delete("Residentes/"+index+".json");
        axiosDatabase.patch("Residentes.json", update);
       
        this.setState({
          usuarios: update,
        });
      } else {
        swal("Es estuvo cerca!",{
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

export default ResidentesAdmin;