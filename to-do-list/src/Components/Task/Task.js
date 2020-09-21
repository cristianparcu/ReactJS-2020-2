import React, { Component } from "react";
import "../../App";
import FlipMove from 'react-flip-move';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import TaskS from './Task.module.css';

function ListItems(props){
  const items = props.items;
  const lista = items.map(item =>
 {
     return <div className="formulario" id={item.id}>
   <p>
       <input type="text" id={item.id} value={item.text} className={TaskS.input} onChange={(e)=>{
           props.setUpdate(e.target.value,item.id)}}/>
      <Grid>
      <DeleteIcon className="faicons" onClick={() => {
          props.deleteItem(item.id)
      }} icon="trash" /> 
      </Grid>
   </p>
   
  </div>})
  return <div> 
      <FlipMove duration={300} easing="ease-in-out">  
      {lista} 
      </FlipMove>
  </div>;   //Flipmove, animacion, se retorna la lista para el render
}

export default ListItems;