import React, { Component } from 'react';



class ButtonAdmin extends Component {

    render() {
        return (
            <div>
            <button
                className="btn btn-default"
                onClick={this.props.handleClick}>imagen: {this.props.label}</button>
            <p>{this.props.label}</p>
            </div>
        )
    }
}

export default ButtonAdmin