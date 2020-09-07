import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const lista = items.map(item =>
   {
       return <div className="lista" id={item.id}>
     <p>
         <input type="text" id={item.id} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.id)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.id)
        }} icon="trash" /> 
        </span>
     </p>
     
    </div>})
    return <div> 
        <FlipMove duration={300} easing="ease-in-out">  
        {lista} 
        </FlipMove>
    </div>;   //Flipmove, animacion, se retorna la lista para el render
  }

  export default ListItems;