import React, { Component } from 'react'
import './Completed.css';
class Completed extends Component {
    render() {
        return (
            <div className="task">
                <p className='through'>{this.props.text}</p>
                <button type="button" className="btn btn-primary rg-25" onClick={() => { this.props.onClick(this.props.id, 0) }}>
                    <i className="fa fa-arrow-left"></i>
                </button>
                <button type="button" className="btn btn-danger " onClick={() => { this.props.onClick(this.props.id, 2) }}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        );
    }
}

export default Completed;