import React, { Component } from 'react';
import classes from'./Card.css'


class Card extends Component {
    render() {
        return (
            <div className={classes['card']} >
                <img className={classes['img']} src={this.props.image} alt="ima"></img>
                <div className={classes['container']}>
                    <h4>{this.props.title}</h4>
                    <p>Consolas: {this.props.consoles}</p>
                </div>
            </div>
        )
    }

}
export default Card