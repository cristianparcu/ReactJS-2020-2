import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {
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
                    <button onClick = {this.submitLoginForm}>Submit</button>
                </div>
            </div>
        );
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
        console.log('User logged in!', this.state);
        this.props.history.push('/');
    }
}

export default LogIn;