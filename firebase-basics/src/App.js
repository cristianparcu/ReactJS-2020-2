import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './containers/HomePage/HomePage'
import LogIn from './containers/LogIn/LogIn';
import SignUp from './containers/SignUp/SignUp';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
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

export default App;
