import React, { Component } from 'react';
import './App.css';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import AllDonations from '../donations/AllDonations';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import { loadDropSites } from '../dropSites/actions';

class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
    this.props.loadDropSites();
  }

  render() {
    return (
      <div>
        <Auth/>
        <AllDonations/>
        <Home/>
      </div>
    );
  }
}

export default connect(
  null,
  { checkForToken, loadDropSites }
)(App);