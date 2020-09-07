import React from 'react';
import './Post.css';

var Post = (props) => {
    return (
        <div className = "post" onClick={props.openFullPost}>
            <h2>{props.post.title}</h2>
            <p>{props.post.author}</p>
        </div>
    )
}

export default Post;