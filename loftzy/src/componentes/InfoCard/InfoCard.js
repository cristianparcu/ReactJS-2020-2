import React, { Component } from 'react';
import classes from './InfoCard.css'

class infoCard extends Component 
{
    render(){
        return(
            <div className={classes['card']}>
                <img className={classes['image']} alt='profile' src='https://www.vhv.rs/dpng/d/217-2174722_admin-icon-png-transparent-png.png'></img>
                <div className={classes['content']}>
                <h4>Nombre: {this.props.name}</h4>
                <p>telefono: {this.props.phone}</p>
                <p>Numero casa: {this.props.numberH}</p>
                </div>
            </div>
        )
    }

}
export default infoCard