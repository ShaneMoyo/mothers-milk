import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import DonorView from '../donor/DonorView';
import Auth from '../auth/Auth';
import Admin from '../admin/Admin';

import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Auth/>}/>
    <PrivateRoute exact path="/home" component={DonorView}/>;
    <PrivateRoute path="/admin" component={Admin}/>;
    <Redirect to="/"/>
  </Switch>  
);