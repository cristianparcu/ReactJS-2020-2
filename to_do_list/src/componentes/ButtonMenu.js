import React, { Component } from 'react';
import classes from'./ButtonMenu.css';


class ButtonAdmin extends Component {

    clickHandler = (val) => {
        this.props.clickHandler(val);
    }

    
    render() {
        return (
            
                
            <button className={classes[this.props.type_b]}            
            onClick={() => this.clickHandler('this.setstate.nueva_tarea.descripcion:""')}
                > {this.props.labelb}</button>
            
            
        )
    }
}

export default ButtonAdmin