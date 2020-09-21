import React from 'react';
import Style from './card.module.css'

const Card = (props) => {
    return (
            <div className={`hvr-grow ${Style.div}`}>
            <img className={Style.img} src={props.img} alt={props.alt}/>
            <div className={Style.info}>
                <p className={Style.name}>{props.name}</p>
            </div>
        </div>
    );
};

export default Card;