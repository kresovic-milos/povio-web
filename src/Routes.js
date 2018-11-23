import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROOT_PAGE, USERS_PAGE, AUTH_PAGE } from './constants';
import Users from './components/views/Users';
import Auth from './components/views/Auth';

export default () => (
  <div>
    <Route exact path={ROOT_PAGE} component={() => <Redirect to={USERS_PAGE} />} />
    <Route path={USERS_PAGE} component={Users} />
    <Route path={AUTH_PAGE} component={Auth} />
  </div>
);
