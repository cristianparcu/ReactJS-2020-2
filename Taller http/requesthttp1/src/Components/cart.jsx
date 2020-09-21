import React from "react";
import './cart.css'

const Cart = (props) => {
    return(
        <div className="caja">
            <p>{props.id}</p>
            <p>Prenom: {props.first_name}</p>
            <p>Nom: {props.last_name}</p>
            <p>E-mail: {props.email}</p>
        </div>
    );
}
export default Cart;