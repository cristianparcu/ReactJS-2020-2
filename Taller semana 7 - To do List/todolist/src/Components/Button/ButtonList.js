import React, { Component } from 'react';
import styles from './ButtonList.module.css'

class buttom extends Component {
    render() {

        return (
            <div>
                 <button class ={styles.boton}type="submit" onClick={this.props.click}>Add</button>
            </div>  
        );
    }
}

export default buttom;