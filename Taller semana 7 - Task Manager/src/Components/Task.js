import React from 'react';
import styles1 from './Task.module.scss'
import styles2 from '../index.module.scss'

class Task extends React.Component {
    constructor() {
        super()

        this.state = {
            checked: styles1.task_notChecked,
            visibility: true
        }
    }

    hideTask = () => {
        this.setState({visibility: false})
    }

    handleCheck = () => {
        this.state.checked === styles1.task_notChecked ? this.setState({checked: styles1.task_checked}):this.setState({checked: styles1.task_notChecked})
    }

    render() {

        let isShowing = styles1.active

        if (!this.state.visibility) {
            isShowing = styles1.removed
        }
        
        return (
            <div className= {`${styles1.task} ${isShowing} ${this.state.checked} ${styles2.flex_dir_col} ${styles2.flex} ${styles2.flex_jc_c}`}>
                <div className={`${styles2.flex} ${styles2.flex_dir_row} ${styles2.flex_ai_c}`}>
                    <input type="checkbox" className={`${styles1.checkbox}`} onChange={this.handleCheck}></input>
                    <h3>{this.props.title}</h3>
                </div>
                <span className={`${styles1.separator}`}></span>
                <p>{this.props.description}</p>
                <div className={`${styles1.btngroup} ${styles2.flex} ${styles2.flex_jc_e}`}>
                    <button className={`${styles1.btn}`} onClick={this.hideTask}><i className="fa fa-trash"></i></button>                
                </div>
            </div>
        )
    }
}

export default Task;