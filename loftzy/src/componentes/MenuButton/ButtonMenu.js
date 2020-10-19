import React, { Component } from 'react';
import classes from '../MenuButton/ButtonMenu.css'



class ButtonMenu extends Component {

    render() {
        return (
            <div className={classes['button']} onClick={this.props.function} >
            <img className={classes['img']} src={this.props.logo}alt='logo'></img>
            <h4 className={classes['container']}>{this.props.title}</h4>
          </div>
        )
    }
}

export default ButtonMenu