import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';
import Swal from 'sweetalert2';
import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';

class LogIn extends Component {
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
				title: "Error",
				text: this.state.error,
				icon: "error",
				confirmButtonText: "Aceptar",

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
        error:state.errorStore.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
        onClearError: () => dispatch(actionCreators.clearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
