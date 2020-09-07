import React, { Component } from 'react';
import styles from './TodoItem.module.css'
import logo from '../../assets/images/minus-solid.svg'

class TodoItem extends Component {
    render() {
        const {todo,id} = this.props;

        return (
            <>
             <button className={`${styles.boton} hvr-grow`} onClick={this.deleteTodo}><img className={styles.img} src={logo} /></button>
            <div className={`${styles.text}  ${todo.completed ? styles.completado : ''}`} onClick={this.toggleCompleted}>
                {todo.text}
            </div>
           
            </>
        );
    }
    toggleCompleted = () =>{
        
        this.props.updateFn(this.props.todo);
    }
    deleteTodo = () =>{
        this.props.deleteFn(this.props.id);
    }
}

export default TodoItem;