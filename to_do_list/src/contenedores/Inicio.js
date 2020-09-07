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
    

    clickHandler = (valor) => {
        // console.log("Entro a la función de mantener tarea")
        // console.log(valor)
        const nueva = valor;
        // console.log(this.state.tareas)   
        if (nueva.text!=="") {
            const nuevas=[...this.state.tareas, nueva];
            // console.log(nuevas) 
            this.setState({
                tareas:nuevas,
                nueva_tarea:{
                    descripcion:'',
                    id:''
                }
            })

        }
        // this.limpiar(valor)
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
        console.log("Entro a borrar la tarea")
        console.log()

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
                    
                ></InputWithLabel>
                
            </div>
            <div className={classes.list}>
                <ListItems items={this.state.tareas}
                           deleteItem ={this.borar_tarea}  editItem={this.editar_item} ></ListItems>
            </div>
            
            <h1 className={classes.h1}>si funciona {this.state.nueva_tarea.descripcion}</h1>
            </>
        )
    }
}


export default Inicio;