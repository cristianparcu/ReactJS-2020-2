import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';
import Alert from '../../components/Alert/Alert'

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

import * as errorTypes from '../../staticValues/firebaseErrors'
class LogIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
    }

    componentDidMount(){
        this.props.cleanErrors();
    }

    componentDidUpdate () {
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
            <>
            {this.renderAlert()}
            <div className="login--form">
                <h1 style = {{textAlign: 'center'}}>Log in</h1>
                <div>
                    <p>Username:</p>
                    <input type="text" className={this.emailHasErrors() ? 'login--form--error-form' : ''}
                        value={this.state.userName}
                        onChange={(event) => {this.updateLoginInfo(event, 'userName')}}
                    />
                    {this.renderEmailError()}
                    <p>Password:</p>
                    <input type="password" className={this.passwordHasErrors() ? 'login--form--error-form' : ''}
                        value={this.state.password}
                        onChange={(event) => {this.updateLoginInfo(event, 'password')}}
                    /><br/>
                    {this.renderPasswordError()}
                    {this.renderSubmitButton()}
                </div>
            </div>
            </>
        );
    }

    renderSubmitButton = () => {
        let content = <button onClick = {this.submitLoginForm}>Submit</button>;

        if(this.props.loadingAuth) {
            content = <Spinner />
        }

        return content;
    }

    renderEmailError = () => {
        switch (this.props.handlingError){
            case errorTypes.INVALID_EMAIL:
                return (<p className='login--form--error-text'>Por favor, ingrese un correo válido</p>);
            case errorTypes.EMAIL_NOT_FOUND:
                return (<p className='login--form--error-text'>La cuenta ingresada no existe</p>);
            default: return;
        }
    }

    renderPasswordError = () => {
        switch (this.props.handlingError){
            case errorTypes.MISSING_PASSWORD:
                return (<p className='login--form--error-text'>Por favor, ingrese la contraseña</p>);
            case errorTypes.INVALID_PASSWORD:
                return (<p className='login--form--error-text'>Contraseña incorrecta</p>);
            default: return;
        }
    }

    emailHasErrors = () => {
        let emailsErrors = [errorTypes.INVALID_EMAIL, errorTypes.EMAIL_NOT_FOUND]
        return emailsErrors.includes(this.props.handlingError)
    }

    passwordHasErrors = () => {
        let passwordErrors = [errorTypes.MISSING_PASSWORD, errorTypes.INVALID_PASSWORD]
        return passwordErrors.includes(this.props.handlingError)
    }

    updateLoginInfo = (event, type) => {
        this.props.cleanErrors();
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
        this.props.cleanErrors();
        const userData = {
            email: this.state.userName,
            password: this.state.password
        };

        this.props.onUserLogin(userData, () => {
            this.props.history.push('/');
        });
    }

    renderAlert = () => {
        //if (this.props.handlingError){
        //    return <Alert msg={this.props.handlingError}/>
        //}
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        handlingError: state.authenticationStore.handlingError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
        cleanErrors: () => dispatch(actionCreators.cleanErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
