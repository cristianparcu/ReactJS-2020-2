import React, { Component } from "react"
import classes from 'C:/Users/mateo/OneDrive/Escritorio/React/Taller3/to-do-list/src/App.css';


class toDoForms extends Component {

    constructor(){
        super();
        this.state = {
            title:'',
            description:'',
            priority:'Baja',
        };
        
        
    }


    handleInput = (e) =>{
       const {value,name }=e.target;
        this.setState({
          [name]:value
       })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onAddTodo(this.state)
        console.log(this.state)
        this.setState({
            title: '',
            description: '',
            priority: 'Baja'
          });
    }

    render() {
        return (
            <div className={classes.ToDoForm}>
                <h3>Nueva Tarea</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className={classes.inputs}
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        placeholder="Título Tarea" />
                    <input
                        className={classes.inputs}
                        type="text"
                        name="description"
                        onChange={this.handleInput}
                        placeholder="Descrición" />
                    <select
                        name="priority"
                        onChange={this.handleInput}
                        className={classes.inputs}
                    >
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                    <button className={classes.button}>Guardar</button>
                </form>
                
            </div>
        )
    }

}
export default toDoForms