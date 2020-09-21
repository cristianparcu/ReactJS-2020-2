import React from 'react';
// import { Link } from 'react-router-dom';
import classes from './Book.css';

var Libro = (props) => {
    return (
        // <Link to={"/libros/"+props.postIndex}>
            <div className = {classes["book"]}>
                <img src={props.ima} />
                <h2>{props.titulo}</h2>
                <p>{props.Autor}</p>
                <h3>{props.precio}</h3>
            </div>
        // </Link>
    )
}

export default Libro;