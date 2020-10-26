import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.css';

import * as actionCreators from '../../store/actions/';

import Button from '../../components/Button/Button';
import Posts from '../../components/Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';


class HomePage extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        posts: this.props.posts,
        newPostInfo: {
            title: "",
            author: "",
            content: ""
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            posts: nextState.posts
        });
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
                <p>Logged as: {this.props.userLoggedIn.userName}</p>
                <button onClick={this.props.onLogOut}>Log out</button>
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
        var newPostInfo = {...this.state.newPostInfo};

        this.props.onSavePost(newPostInfo);

        this.setState({
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
                    <Button label="Sign up" linkTo='./signup' type='secondary'/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        posts: state.postsStore.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePost: (post) => dispatch(actionCreators.savePost(post)),
        onLogOut: () => dispatch(actionCreators.logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
