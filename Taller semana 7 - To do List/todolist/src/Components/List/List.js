import React, { Component } from 'react';
import Item from '../List_item/Item'
import styles from './List.module.css'
class List extends Component {
    
    render() 
{  return (
            <div >
              {this.props.Items.map((item,i)=>{
                  return(
                      
                  <Item task={item} deleteItem={()=>this.props.deleteItem(i)}/>
                  )
              })}
               
              
            </div>
        );  }

  
}

export default List;