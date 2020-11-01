import React,{Component} from 'react';
import classes from '../App.css'

import Task from './Task.js'
import InputBar from './InputBar.js'

class List extends Component{

   constructor(props){
       super(props);
        this.state = {
            
            list:['start','second','third'],
        };
       this.handleClick = this.handleClick.bind(this);

       
   }


handleClick(value) {
  const updatedList = [...this.state.list];
  updatedList.push(value);
  this.setState({ list: updatedList });
}

onDelete(index){
    const updatedList = [...this.state.list];
    updatedList.splice(index,1);
    this.setState({ list: updatedList });
}

    
    render(){
        let todoList = this.state.list.map((text,index) => <Task task={text} key={index} onDelete={(e) => this.onDelete(index)} /> );
        return(
            <>
            <InputBar handleClick={this.handleClick}/>
            {todoList}
          </>
        )
    }
}
export default List;