import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignUp.css';

import * as actionCreators from '../../store/actions/';

class SignUp extends Component {
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
            <div className="sign-up--form">
                <h1 style = {{textAlign: 'center'}}>Sign up</h1>
                <div>
                    <p>Username:</p>
                    <input type="text"
                        value={this.state.userName}
                        onChange={(event) => {this.updateSignUpInfo(event, 'userName')}}
                    />
                    <p>Password:</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={(event) => {this.updateSignUpInfo(event, 'password')}}
                    /><br/>
                    <button onClick = {this.submitSignUpForm}>Submit</button>
                </div>
            </div>
        );
    }

    updateSignUpInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password
        });
    }

    submitSignUpForm = () => {
        this.props.onUserSignUp(this.state.userName);
        this.props.history.push('/');
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignUp: (userName) => dispatch(actionCreators.signUp(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
