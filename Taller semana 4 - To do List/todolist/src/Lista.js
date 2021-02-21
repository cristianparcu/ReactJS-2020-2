import React from "react";
import "./Lista.css";


function Lista(props){
    const items = props.items;
    const Lista = items.map(item =>{

        return <div className="lista" key="item.key">
            <p>{item.text}</p>
            
        </div>


    })
    return(
        <div>{Lista}</div>
    )

}

export default Lista;

