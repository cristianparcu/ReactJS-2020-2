import React, { Component,useState   } from 'react';
import style from './Item.module.css'

function Item(props)  {
    const [Done,setDone] = useState(false);
    const Checker= async(e)=>{
            await setDone(!Done);
      }
        return (
            <div id="id"  onClick={Checker} className={`${style.borde}  ${Done ? style.agregar:""}`}>
                <a>{props.task}</a>
                <button  class={style.boton}onClick={()=>props.deleteItem()}>Delete</button>
            </div>
        );
    
}

export default Item;