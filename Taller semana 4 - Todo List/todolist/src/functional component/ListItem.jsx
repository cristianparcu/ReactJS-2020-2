import React from "react";
import "./ListItem.css"
import "../cerrar.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItems(props) {
    const customEnterAnimation = {
        from: { transform: 'scale(0.5, 1)' },
        to:   { transform: 'scale(1, 1)' }
    };
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" keys={item.key}>
            <p>
                {item.text}
                <span>
                    <FontAwesomeIcon className="faicons" icon="ban" onClick={ () => props.deleteItem(item.key)}/>
                </span>
            </p>

        </div>
    })
    return (
        <div>
            <FlipMove enterAnimation={customEnterAnimation}>
                {listItems}
            </FlipMove>
        </div>


    )
}

export default ListItems;