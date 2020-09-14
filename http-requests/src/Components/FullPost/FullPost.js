import React from 'react';
import classes from './FullPost.css';
import { withRouter } from 'react-router-dom';

var FullPost = (props) => {
    var openPost = props.openPost(props.match.params.postIndex);

    return (
        <div className = {classes["full-post"]}>
            <h2>{openPost.title}</h2>
            <p>{openPost.content}</p>
            <p className = {classes["author-text"]}>{openPost.author}</p>
        </div>
    )
}

export default withRouter(FullPost);