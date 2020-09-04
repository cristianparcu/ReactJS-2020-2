import React,{Component} from 'react';
import classes from '../App.css'


class InputBar extends Component{

   constructor(props){
       super(props);
        this.state = {
            value:'',
        };
       this.onChange = this.onChange.bind(this);

       
   }
onChange(e){
   this.setState({
    value: e.target.value
   });
}

    render(){
        return(
            <div className={classes.input}>
                <input  value={this.state.value} onChange={this.onChange} placeholder="ingrese tarea nueva" />
                <button className={classes.button} onClick={(e) => this.props.handleClick(this.state.value)}>Agregar</button>
            </div>
          
        )
    }
}
export default InputBar;