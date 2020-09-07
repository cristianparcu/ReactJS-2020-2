import React from 'react';
import './FullPost.css';

var FullPost = (props) => {
    return (
        <div className = "full-post">
            <h2>{props.openPost.title}</h2>
            <p>{props.openPost.content}</p>
            <p className = "author-text">{props.openPost.author}</p>
        </div>
    )
}

export default FullPost;