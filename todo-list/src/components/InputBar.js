import React,{Component} from 'react';
import classes from '../App.css'


class InputBar extends Component{

    render(){
        return(
            <div className={classes.input}>
                <input type={Text} placeholder="ingrese tarea nueva" />
            </div>
        )
    }
}
export default InputBar;