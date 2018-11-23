import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROOT_PAGE, SIGNUP_PAGE, LOGIN_PAGE } from '../../../constants';
import Signup from './Signup';
import Login from './Login';

const Auth = () => (
  <div>
    <Switch>
      <Route path={SIGNUP_PAGE} component={Signup} />
      <Route path={LOGIN_PAGE} component={Login} />
      <Route path={ROOT_PAGE} component={() => <Redirect to={LOGIN_PAGE} />} />
    </Switch>
  </div>
);

export default Auth;
