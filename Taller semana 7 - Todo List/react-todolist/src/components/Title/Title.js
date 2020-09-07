import React, { Component } from 'react';
import styles from './Title.module.css'

class Title extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.text}>{this.props.children}</h1>
            </div>
        );
    }
}

export default Title;