import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PageNotFound from './PageNotFound';
import HomePage from './home/Homepage';
import Header from './common/Header';
import Dashboard from './userdash/Dashboard';
import Signin from './auth/Signin';
import SendLink from './auth/SendLink';
import ResetPassword from './auth/ResetPassword';

import { loginViaSession } from '../redux/actions/authActions';

const matchDispatchToProps = {
  loginViaSession
};

const mapStateToProps = (state) => ({ token: state.auth.token });

const App = (props) => {
  const { token } = props;
  const session = sessionStorage.getItem('credentials') || '';

  if (!token && session) {
    const user = {
      token: session
    };
    props.loginViaSession(user);
  }

  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
