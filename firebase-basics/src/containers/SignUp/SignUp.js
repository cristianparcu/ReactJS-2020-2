import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignUp.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

class SignUp extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
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
        var {code,message}= this.props.error;
        var mensajeError= this.props.error.code !== undefined ? "Fallo" + code + ": " + message:"Nuevo registro"
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
                    <h2 className="error-msg">{mensajeError}</h2>
                    {this.renderSubmitButton()}
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
    }

    submitSignUpForm = () => {
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
        error: state.authenticationStore.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignUp: (authData, onSuccessCallback) => dispatch(actionCreators.signUp(authData, onSuccessCallback)),
        onClean: () => dispatch(actionCreators.reloadError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
