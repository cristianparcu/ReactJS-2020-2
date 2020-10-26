import React from 'react';
import './Post.css';

var Post = (props) => {
    return (
        <div className = "post">
            <h2>{props.post.title}</h2>
            <p className = 'post--author'>{props.post.author}</p>
            <p className = 'post--content'>{props.post.content}</p>
        </div>
    )
}

export default Post;