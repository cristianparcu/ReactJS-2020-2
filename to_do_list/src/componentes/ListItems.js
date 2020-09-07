import React from 'react';
import classes from'./ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt}  from '@fortawesome/free-solid-svg-icons';

// library.add(faPencilalt);


function ListItems(props){
    const items= props.items;
     console.log("esta es la lista")                        
     console.log(items)
    const lista = items.map(item =>{
        console.log(item.id)
        return <div className={classes.list} 
                    key={item.id} >
            
            <p className={classes.p}>{item.descripcion} 
            <span className={classes.trash}>
                <FontAwesomeIcon className={classes.icono1} 
                                 icon='trash' 
                                 onClick={() => props.deleteItem(item.id)} />
            </span> 
            <span className={classes.edit}>
                <FontAwesomeIcon className={classes.icono2} 
                                 icon={faPencilAlt}
                                 />
            </span>
            {/* fa-pencil-alt */}
            {/* onClick={() => props.deleteItem(item.id)}  */}

            </p>
            
        </div>
    })
    
    return(
        <div>{lista}</div>
        
    )
}
export default ListItems;