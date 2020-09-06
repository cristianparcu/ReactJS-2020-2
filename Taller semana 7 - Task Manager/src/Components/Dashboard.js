import React from 'react';
import styles1 from './Dashboard.module.scss';
import styles2 from '../index.module.scss';
import FlipMove from 'react-flip-move';
import Task from './Task';
import Getinfo from './Getinfo';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            taskList: []
        }
    }

    addTask = (title, description) => {
        console.log(title + " from parent")
        const newTask = <Task key={this.state.taskList.length + 1} title={title} description={description} />
        const newList = [newTask, ...this.state.taskList];
        console.log(newList)
        this.setState({taskList: newList});
    }

    render() {
        return(
            <div className={`${styles1.dashboard} ${styles2.flex} ${styles2.flex_dir_row} ${styles2.flex_jc_c}`}>
                <Getinfo addTask={this.addTask} />
                <div className={`${styles1.tasks} ${styles2.flex} ${styles2.flex_dir_col} ${styles2.flex_ai_c}`}>
                    <h3 className={`${styles1.tasksTitle}`}>Tareas</h3>
                    <FlipMove duration={300} easing="ease-in-out">
                    {this.state.taskList}
                    </FlipMove>
                </div>
            </div>
        )
    }
}

export default Dashboard