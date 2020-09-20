import React from 'react';
import styles from './ListItems.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className={!item.checked ? styles.list: `${styles.listChecked} ${styles.list}`} key={item.key}>
            <p>
                <input type="checkbox" onChange={(e) => 
                    props.setStyle(item.key)}></input>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>

                    <FontAwesomeIcon className={styles.faircons} onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>
            </p>

        </div>
    })
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>

    </div>;
}

export default ListItems;