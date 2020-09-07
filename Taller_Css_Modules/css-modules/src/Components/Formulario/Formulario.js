import React, { PureComponent } from 'react'
import classes from './Formulario.css'



class Formulario extends React.Component {
    constructor() {
        super()

        this.state = {
            todo: ''
        }
    }

    render() {
        return (
            <div className={classes.bod}>
                <form onSubmit={(e) => this.submit(e)}>
                    <div className={classes["Inputbox"]}>
                        <input id="add" onChange={(e) => this.updateInput(e)} type="text" name="Actividad"></input>
                        <label>Actividad</label>
                    </div>
                    <div>
                    <button  type="submit"><span></span><span></span><span></span><span></span>Agregar Actividad</button>
                    </div>
                </form>
            </div>
        )
    }
    
    updateInput = (e) => {
        this.setState({todo: e.target.value});
    }
    submit = (e) => {
        e.preventDefault();
        console.log('submit', this.state);
        this.props.agregarF(this.state.todo);
        document.getElementById("add").value = '';
    }
}

export default Formulario
