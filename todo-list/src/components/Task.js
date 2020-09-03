import React, {Component} from 'react';
import classes from '../App.css'


class Task extends Component{
    

    render(){
        return(
            <div className={classes.taskBox}>
                <p className={classes.taskDetail}>{this.props.task}</p>
            </div>
        )
    }
}


export default Task;