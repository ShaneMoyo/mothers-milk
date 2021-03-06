import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import DonorView from '../donor/DonorView';
import Home from '../home/Home';
import Admin from '../admin/Admin';
import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Home/>}/>
    <PrivateRoute exact path="/home" component={DonorView}/>;
    <PrivateRoute path="/admin" component={Admin}/>;
    <Redirect to="/"/>
  </Switch>  
);