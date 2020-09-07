import React from 'react'
import classes from './Item.css'

class Item extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        let {todo} = this.props;
        return (
            <div className={classes['item']} onClick={this.toggleT}>
                <div className={(todo.completed ? classes['completed'] : '')}>
                    {todo.text}
                </div>
                
            </div>
        )
    }

    toggleT = () => {
        this.props.updateF(this.props.todo);
    }
}

export default Item