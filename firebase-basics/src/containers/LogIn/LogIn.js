import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
    }

    componentWillMount () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
        });
    }

    render () {
        return (
            <div className="login--form">
                <h1 style = {{textAlign: 'center'}}>Log in</h1>
                <div>
                    <p>Username:</p>
                    <input type="text"
                        value={this.state.userName}
                        onChange={(event) => {this.updateLoginInfo(event, 'userName')}}
                    />
                    <p>Password:</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={(event) => {this.updateLoginInfo(event, 'password')}}
                    /><br/>
                    {this.renderSubmitButton()}
                </div>
            </div>
        );
    }

    renderSubmitButton = () => {
        let content = <button onClick = {this.submitLoginForm}>Submit</button>;

        if(this.props.loadingAuth) {
            content = <Spinner />
        }

        return content;
    }

    updateLoginInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password
        });
    }

    submitLoginForm = () => {
        this.props.onUserLogin(this.state.userName);
        this.props.history.push('/');
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (userName) => dispatch(actionCreators.logIn(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
