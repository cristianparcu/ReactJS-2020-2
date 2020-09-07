import React, { Component } from 'react';
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'

class TodoList extends Component {
    render() {

        const {todos} = this.props;

        return (
            <div className={styles.container}>
                {todos.map((item,index)=>{

                    return (
                        <TodoItem deleteFn={this.deleteTodo} updateFn={this.updateTodo} key={index} id={index} todo={item}/>
                    );
                })}
            </div>
        );
    }
    updateTodo = (todo) =>{
        
        this.props.updateFn(todo);
    }
    deleteTodo =  (id) =>{
        this.props.deleteFn(id);
    }
 }

export default TodoList;