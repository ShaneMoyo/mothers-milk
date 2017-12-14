import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../home/Home';
import Auth from '../auth/Auth';
import Admin

import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Auth/>}/>
    <PrivateRoute exact path="/home" component={Home}/>;
    <PrivateRoute path="/admin" render={({ match }) => <Admin id={match.params.id}/>}/>;
    <Redirect to="/"/>
  </Switch>  
);