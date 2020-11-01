import React, {Component} from 'react';
import classes from '../App.css'


class Task extends Component{
    

    render(){
        return(
            <div className={classes.taskBox}>
                <p className={classes.taskDetail}>{this.props.task}</p>
                <button className={classes.button} onClick={this.props.onDelete}>X</button>
            </div>
        )
    }
}


export default Task;