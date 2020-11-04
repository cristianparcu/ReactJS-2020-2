import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignUp.css';
import Alert from '../../components/Alert/Alert'

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

import * as errorTypes from '../../staticValues/firebaseErrors'

class SignUp extends Component {
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

    renderAlert = () => {
        if (this.props.handlingError){
            return <Alert msg={this.props.handlingError}/>
        }
    }

    renderEmailError = () => {
        switch (this.props.handlingError){
            case errorTypes.INVALID_EMAIL:
              return (<p className='sign-up--form--error-text'>Por favor, ingrese un correo válido</p>);
            case errorTypes.EMAIL_EXISTS:
              return (<p className='sign-up--form--error-text'>El correo ya existe</p>);
            default: return;
        }
    }

    renderPasswordError = () => {
        switch (this.props.handlingError){
            case errorTypes.MISSING_PASSWORD:
                return (<p className='sign-up--form--error-text'>Por favor, ingrese una contraseña válida</p>);
            case errorTypes.WEAK_PASSWORD:
                return (<p className='sign-up--form--error-text'>Contraseña muy débil</p>);
            default: return;
        }
    }

    emailHasErrors = () => {
        let emailsErrors = [errorTypes.INVALID_EMAIL, errorTypes.EMAIL_EXISTS]
        return emailsErrors.includes(this.props.handlingError)
    }

    passwordHasErrors = () => {
        let passwordErrors = [errorTypes.MISSING_PASSWORD, errorTypes.WEAK_PASSWORD]
        return passwordErrors.includes(this.props.handlingError)
    }

    render () {
        return (
            <div>
                {/*this.renderAlert()*/}
                <div className="sign-up--form">
                    <h1 style = {{textAlign: 'center'}}>Sign up</h1>
                    <div>
                        <p>Username:</p>
                        <input type="text" className={this.emailHasErrors()?'sign-up--form--error-form':''}
                            value={this.state.userName}
                            onChange={(event) => {this.updateSignUpInfo(event, 'userName')}}
                        />
                        {this.renderEmailError()}
                        <p>Password:</p>
                        <input type="password" className={this.passwordHasErrors()?'sign-up--form--error-form':''}
                            value={this.state.password}
                            onChange={(event) => {this.updateSignUpInfo(event, 'password')}}
                        /><br/>
                        {this.renderPasswordError()}
                        {this.renderSubmitButton()}
                    </div>
                </div>
            </div>
        );
    }

    renderSubmitButton = () => {
      let content = <button onClick = {this.submitSignUpForm}>Submit</button>;

      if(this.props.loadingAuth) {
          content = <Spinner />
      }

      return content;
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

        this.props.cleanErrors()
    }

    submitSignUpForm = () => {
        this.props.cleanErrors()

        const userData = {
          email: this.state.userName,
          password: this.state.password
        };
      

        this.props.onUserSignUp(userData, () => {
          this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        handlingError: state.authenticationStore.handlingError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignUp: (authData, onSuccessCallback) => dispatch(actionCreators.signUp(authData, onSuccessCallback)),
        cleanErrors: () => dispatch(actionCreators.cleanErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
