import React,{Component} from 'react'
import classes from './Comentario.css'

class Comentario extends Component
{
    render(){
        return(
            <div className={classes['card']}>
                    <p className={classes['user']}>{this.props.name}</p>
                    <p>{this.props.comment}</p>
                    <p className={classes['time']}>{this.props.hour}</p>
                </div>
        )
    }
}

export default Comentario