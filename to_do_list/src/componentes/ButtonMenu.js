import React, { Component } from 'react';
import classes from'./ButtonMenu.css';


class ButtonAdmin extends Component {

    // clickHandler = (val) => {
    //     this.props.clickHandler(val);
    // }
//() => this.clickHandler('this.setstate.nueva_tarea.descripcion:""')
    
    render() {
        return (
            
                
            <button className={classes[this.props.type_b]}            
            onClick={this.props.clickHandler}
                > {this.props.labelb}</button>
            
            
        )
    }
}

export default ButtonAdmin