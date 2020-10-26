import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

class Button extends Component {

    render () {
        return (
            <button className={this.getClass(this.props.type)}>
                <Link to = {this.props.linkTo} className = 'button--link'>
                    {this.props.label}
                </Link>
            </button>
        )
    }

    getClass = (...classNames) => {
        let updatedClassName = 'button';

        classNames.forEach((className) => {
            updatedClassName = updatedClassName.concat(' '+className);
        });

        return updatedClassName;
    }
};

export default Button;