import React, { Component } from 'react';
import './HomePage.css';

import Button from '../../components/Button/Button';
import Posts from '../../components/Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';


class HomePage extends Component {
    state = {
        isUserLoggedIn: true,
        posts: [],
        newPostInfo: {
            title: "",
            author: "",
            content: ""
        }
    }

    render () {
        return (
            this.state.isUserLoggedIn ? this.onUserLoggedIn() : this.onUserLoggedOut()
        );
    }

    onUserLoggedIn () {
        return (
            <div>
                <h1>Home</h1>
                <NewPost
                    newPostInfo = {this.state.newPostInfo}
                    updateNewPostData = {this.updateNewPostData}
                    submitNewPost = {this.submitNewPost}
                />
                <Posts posts = {this.state.posts}/>
            </div>
        );
    }

    updateNewPostData = (event, type) => {
        var updatedNewPostInfo = {
          ...this.state.newPostInfo
        }

        updatedNewPostInfo[type] = event.target.value;

        this.setState({
            newPostInfo: updatedNewPostInfo
        });
    }

    submitNewPost = () => {
        var updatedPosts = [...this.state.posts];
        var newPostInfo = {...this.state.newPostInfo}

        updatedPosts.push(newPostInfo);

        this.setState({
            posts: updatedPosts,
            newPostInfo: {
                title: "",
                author: "",
                content: ""
            }
        })
    }

    onUserLoggedOut () {
        return (
            <div style = {{textAlign: 'center'}}>
                <h1>Welcome to this awesome app!</h1>
                <h2>If you already have an account please Log in</h2>
                <h2>Otherwise please sign up.</h2>
                <div className = "home-page--button-section">
                    <Button label="Log in" linkTo='./login' type='primary'/>
                    <Button label="Sign in" linkTo='./signin' type='secondary'/>
                </div>
            </div>
        );
    }
}

export default HomePage;