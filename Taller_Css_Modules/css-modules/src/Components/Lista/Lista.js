
import React from 'react'
import Item from '../Item/Item'

class Lista extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    render() {
        let {todos}=this.props;
        return (
            <div>
                {
                    todos.map((_todo, _index) => {
                        return(
                            <Item updateF={this.update} key={_index} todo={_todo}/>
                        )
                    })
                }
            </div>
        )
    }

    update = (todo) => {
        this.props.updateF(todo);
    }
}

export default Lista