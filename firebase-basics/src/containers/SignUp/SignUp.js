import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    state = {
        isUserLoggedIn: false,
        userName: '',
        password: ''
    }

    componentWillMount () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    render () {
        return (
            <div className="sign-up--form">
                <h1 style = {{textAlign: 'center'}}>Sign up</h1>
                <div>
                    <p>Username:</p>
                    <input type="text"
                        value={this.state.userName}
                        onChange={(event) => {this.updateSignInInfo(event, 'userName')}}
                    />
                    <p>Password:</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={(event) => {this.updateSignInInfo(event, 'password')}}
                    /><br/>
                    <button onClick = {this.submitSignInForm}>Submit</button>
                </div>
            </div>
        );
    }

    updateSignInInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password
        });
    }

    submitSignInForm = () => {
        console.log('User Signed Up!', this.state);
        this.props.history.push('/');
    }
}

export default SignUp;
