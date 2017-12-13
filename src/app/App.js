import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import { loadDropSites } from '../dropSites/actions';

class App extends Component {
  componentDidMount() {
    console.log('checking for token================');
    this.props.checkForToken();
    this.props.loadDropSites();
  }

  render() {
    return (
      <div>
        <Auth/>
        <Home/>
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({ 
    user: auth.user,
    checkedToken: auth.checkedToken
  }),
  { checkForToken, loadDropSites }
)(App);