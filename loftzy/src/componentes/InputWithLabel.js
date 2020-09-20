import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class InputWithLabel extends Component {
    
    
    
    render(){
            return(
         <div>
             <label> {this.props.label}</label>
             <input type="text" placeholder={this.props.placeholder}/>             
         </div>
            
        )
    }
}

export default InputWithLabel;