import React, { Component } from "react"
import classes from 'C:/Users/mateo/OneDrive/Escritorio/React/Taller3/to-do-list/src/App.css';

class Card extends Component {
     

    render() {
        
        return (
            <div className={classes.Card} >
                <h3>{this.props.title}</h3>
                <span className={classes.priority}>{this.props.priority}</span>
                <p>{this.props.description}</p>
                <button className={classes.buttonD} onClick={this.props.removeC}>Eliminar</button>
            </div>
        )

    }
}

export default Card