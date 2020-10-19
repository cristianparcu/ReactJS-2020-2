import React , {Component}from 'react';
import InputWithLabel from '../componentes/InputWithLabel';
import classes from'./Inicio.css';
import ListItems from '../componentes/ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash}  from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class Inicio extends Component {

    state = {
            tareas:[],
            nueva_tarea:{
                descripcion:'',
                id:''
                }
            
            }
    

    clickHandler = () => {
        // console.log("Entro a la función de mantener tarea")
        // console.log(valor)
        // const nueva = valor;
        // console.log(this.state.tareas)   
        // if (nueva.text!=="") {
            const nuevas=[...this.state.tareas, this.state.nueva_tarea];
            // console.log(nuevas) 
            this.setState({
                tareas:nuevas,
                nueva_tarea:{
                    descripcion:'',
                    id:''
                }
            })

        
        // this.limpiar(valor)
    }

    handleInput = (event) => {
                this.setState({
                    nueva_tarea:{
                        descripcion: event.target.value,
                        id: Date.now()
                        }
                })
            }
     
    // limpiar(valor){
    //     valor.preventDefault();
        

    // }

    borar_tarea = (key) => {
        console.log("Entro a borrar la tarea")
        console.log(key)
        const quitar = this.state.tareas.filter(item => item.id!==key);
        this.setState({tareas:quitar})
    }

    editar_item = (Key) =>{
        console.log("Entro a editar la tarea")
        
        const buscar = this.state.tareas.map((item,id) => {return (
            id!==Key
        )});
        console.log(buscar)
        this.setState({
            nueva_tarea:{
                descripcion: buscar.descripcion,
                id: Date.now()
                }
        })
        const quitar = this.state.tareas.filter(item => item.id!==Key);
        this.setState({tareas:quitar})

    }

    render(){
        // console.log("Entro a la función de render")
        // console.log(this.state.tareas)
        return(
            <>
            <div className={classes.heading}>
                <InputWithLabel 
                    type_b="button1" 
                    label="Tarea : "
                    placeholder="Escriba la tarea" 
                    labelb="Ingresar tarea"
                    clickHandler={this.clickHandler}
                    handleInput={this.handleInput}
                    nueva_tarea={this.state.nueva_tarea}
                    
                ></InputWithLabel>
                
            </div>
            <div className={classes.list}>
                <ListItems items={this.state.tareas}
                           deleteItem ={this.borar_tarea}  editar_item={this.editar_item} ></ListItems>
            </div>
            
            <h1 className={classes.h1}>si funciona {this.state.nueva_tarea.descripcion}</h1>
            </>
        )
    }
}


export default Inicio;