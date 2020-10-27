import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
    }

    componentDidUpdate () {
        if (this.state.isUserLoggedIn)
            this.props.history.push('/');
        else if (this.props.error !== '' && !this.props.loadingAuth)
            this.showError();
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
    showError = () => {
        MySwal.fire({
            icon: 'error',
            text: this.props.error
        }).then(() => {
            this.props.afterErrorShow();
        });
    }
    submitLoginForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
        };

        this.props.onUserLogin(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        error:state.authenticationStore.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
        afterErrorShow: ()=>dispatch(actionCreators.cleanError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
