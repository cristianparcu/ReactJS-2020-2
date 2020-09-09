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
            idIndex: 0,
            todoList: [],
            completedList: []
        }
    }

    addTask = (title, description) => {
        const newTask = {
            key: this.state.idIndex.toString(), title: title,
            description: description, checked: false, switchLists: this.switchLists
        }

        const newList = [newTask, ...this.state.todoList];

        var newIndex = this.state.idIndex + 1;

        this.setState({ todoList: newList });
        this.setState({ idIndex: newIndex });
    }

    switchLists = (props) => {
        for (let i=0; i < this.state.todoList.length; i++) {
            if (props.title === this.state.todoList[i].title) {
                let listCopy = this.state.todoList
                const switched = {
                    key: this.state.todoList[i].key.toString(),
                    title: props.title,
                    description: props.description,
                    checked: !props.checked,
                    switchLists: props.switchLists
                }
                
                listCopy.splice(i, 1, switched)
                console.log(listCopy)
                this.setState({todoList: listCopy})
            }
        }
    }

    render() {
        const unchecked = this.state.todoList.map((elem1) => {
            if (!elem1.checked) {
                return <Task key={elem1.key} title={elem1.title} description={elem1.description}
                checked={elem1.checked} switchLists={elem1.switchLists} />
            } else {
                return
            }
        })
        const checked = this.state.todoList.map((elem2) => {
            if (elem2.checked) {
                return <Task key={elem2.key} title={elem2.title} description={elem2.description}
                checked={elem2.checked} switchLists={elem2.switchLists} />
            } else {
                return
            }
        })

        return (
            <div className={`${styles1.dashboard} ${styles2.flex} ${styles2.flex_dir_row} ${styles2.flex_jc_c}`}>
                <Getinfo addTask={this.addTask} />
                <div className={`${styles1.tasks} ${styles2.flex} ${styles2.flex_dir_col} ${styles2.flex_ai_c}`}>
                    <h3 className={`${styles1.tasksTitle}`}>Tareas</h3>
                    <FlipMove duration={300} easing="ease-in">
                        {unchecked}
                    </FlipMove>
                    <FlipMove duration={300} easing="ease-in">
                        {checked}
                    </FlipMove>
                </div>
            </div>
        )
    }
}

export default Dashboard