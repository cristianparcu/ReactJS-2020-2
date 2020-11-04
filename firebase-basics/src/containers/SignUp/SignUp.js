import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignUp.css';

import Spinner from '../../components/Spinner/Spinner';
import Swal from 'sweetalert2';

import * as actionCreators from '../../store/actions/';

class SignUp extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: '',
        error:''
    }

    componentDidUpdate () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }else if(this.state.error!==''){
            Swal
			.fire({
				title: "Ha ocurrido un error",
				text: this.state.error,
				icon: "error",
				confirmButtonText: "Entendido",
				
			})
			.then( (result) => {
				this.props.onClearError();
			});
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            error: nextState.error
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
        error:state.errorStore.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignUp: (authData, onSuccessCallback) => dispatch(actionCreators.signUp(authData, onSuccessCallback)),
        onClearError: () => dispatch(actionCreators.clearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
