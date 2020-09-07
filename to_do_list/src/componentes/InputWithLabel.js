import React, {Component} from 'react';
import ButtonAdmin from './ButtonMenu';
import classes from'./InputWithLabel.css';

class InputWithLabel extends Component {

    state = {
        nueva_tarea:{
            descripcion:'',
            id:''
            }        
    }
    
    clickHandler = (val) => {
        // this.props.clickHandler(val)
        // console.log(val)
        this.props.clickHandler(this.state.nueva_tarea)
        console.log(this.state.nueva_tarea.descripcion);
        this.preventDefault();
   } 
    
    handleInput = (valor) => {
        this.setState({
            nueva_tarea:{
                descripcion: valor.target.value,
                id: Date.now()
                }
        })
    }

    

    render(){
            return(
                <>
                <div>
                <label className={classes.label}> {this.props.label}</label>
                <input value={this.state.nueva_tarea.text} onChange={this.handleInput} 
                       className={classes.input} type="text" placeholder={this.props.placeholder}/>             
                </div>
                <div>
                <ButtonAdmin 
                    clickHandler={this.clickHandler}
                    type_b={this.props.type_b} labelb={this.props.labelb} />
                </div>
                </>
        )
    }
}

export default InputWithLabel;