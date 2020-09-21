import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const lista = items.map(item =>
   {
       return <div className="lista" key={item.key}>
     <p>
         <input type="text" key={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
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