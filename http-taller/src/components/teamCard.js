import React from 'react'
import classes from './teamCard.css'

 const team = (props)=>{
    return(
        <div className={classes.box }>
            <img src={props.badge} className={classes.badge}/>
            <h2 className={classes.name}>{props.name}</h2>
        </div>
    );
}

export default team;