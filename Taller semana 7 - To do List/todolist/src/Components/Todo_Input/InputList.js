import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Insert task" value={this.props.val} onChange={this.props.change}/>
            </div>
        );
    }
}

export default Input;