import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/';

import HomePage from './containers/HomePage/HomePage'
import LogIn from './containers/LogIn/LogIn';
import SignUp from './containers/SignUp/SignUp';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {

  componentDidMount = () => {
    this.props.onPersistAuthentication();
  }

  render = () => (
    <BrowserRouter>
      <Switch>
        <Route path = '/' component = {HomePage} exact/>
        <Route path = '/login'  component = {LogIn}/>
        <Route path = '/signup' component = {SignUp}/>
        <Route component = {NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch( actionCreators.persistAuthentication() )
  };
};

export default connect(null, mapDispatchToProps)(App);
