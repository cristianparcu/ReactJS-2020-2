import React, { Component } from "react";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Button,
  Paper,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import NotificationsIcon from "@material-ui/icons/Notifications";
import swal from "sweetalert";
import InputWithLabel from "../../componentes/InputWithLabel/InputWithLabel";
import AppBar from "../../componentes/NavBar/NavBar";
import classes from "./Celador.css";
import emailjs from "emailjs-com";
import axiosDatabase from "../../Instances/axios-realtime";
export default class Celador extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: "",
      temp: "",
      casa:"",
      rows: [],
      headers: ["NOMBRE", "ID","CASA", "TEMP", "DIA", "ACCIONES"],
    };
  }

  componentDidMount(){
    axiosDatabase.get(".json")
    .then((res)=>{
      if(res.data.Ingresos){
        this.setState({
          rows:res.data.Ingresos
        })
      }
     
      
    })
    .catch(err=>{
      this.setState({
        rows:[]
      })
    })
  }
  createData= ()=> {
    let name = this.state.name;
    let temp = this.state.temp;
    let id = this.state.id;
    let casa = this.state.casa;
    var day = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    let data = { name, id, temp, day,casa };
    
    axiosDatabase.put("Ingresos/"+this.state.rows.length+".json", {"name":name,"id":id,"temp":temp,"day":day,"casa":casa}).then(console.log(data))
    let update = [...this.state.rows];
    update.push(data);
    this.setState({
      rows: update,
    });
  }

  DeleteData= (index)=> {
    console.log(index);
    let update = [...this.state.rows];
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
        axiosDatabase.delete("Ingresos/"+index+".json");
        axiosDatabase.patch("Ingresos.json", update);
       
        this.setState({
          rows: update,
        });
      } else {
        swal("Es estuvo cerca!");
      }
    });
  }

  notify=(index)=> {
    let update = this.state.rows[index];
    console.log(update);
    const templateParams = {
      name: update.name,
      casa: update.casa,
      day: update.day,
    };
    emailjs
      .send(
        "service_9s1fw9c",
        "template_d8vbgnf",
        {
          name: templateParams.name,
          casa: templateParams.casa,
          day: templateParams.day,
          reply_to: "",
        },
        "user_HtmFCV2dwsClEX3FiqXit"
      )
      .then(
        (response) => {
          swal("Se envio la notifiación", "", "success");
        },
        (err) => {
          swal("errr algo raro sucedio", "", "error");
        }
      );
  }

  render() {
    return (
      <div>
        <AppBar list={[]} />
        <Card className={classes.box}>
          <InputWithLabel
            label="Nombre"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <InputWithLabel
            label="Id"
            onChange={(event) => this.setState({ id: event.target.value })}
          />
           <InputWithLabel
            label="Casa"
            
            onChange={(event) => this.setState({ casa: event.target.value })}
          />
          <InputWithLabel
            label="Temperatura"
            type="number"
            onChange={(event) => this.setState({ temp: event.target.value })}
          />
          <Button onClick={this.createData}>Agregar</Button>
        </Card>

        <TableContainer
          component={Paper}
          style={{ width: "900px" }}
          className={classes.table}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {this.state.headers.map((header) => {
                  return <TableCell align="right">{header}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody className={classes.table}>
              {this.state.rows.map((row, index) => (
                <TableRow key={row.name}>
                

                <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.casa}</TableCell>
                  <TableCell align="right">{row.temp}</TableCell>
                  <TableCell align="right">{row.day}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => this.DeleteData(index)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => this.notify(index)}>
                      <NotificationsIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
