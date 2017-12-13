import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';

class App extends Component {
  componentDidMount() {
    console.log('checking for token');
    this.props.checkForToken();
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
  { checkForToken }
)(App);