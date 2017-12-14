import React, { Component } from 'react';
import './App.css';
import DonorView from '../donor/DonorView';
import Auth from '../auth/Auth';
import AllDonations from '../donations/AllDonations';
import Admin from '../admin/Admin';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import { loadDropSites } from '../dropSites/actions';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from '../auth/Nav';

class App extends Component {
  
  componentDidMount() {
    this.props.checkForToken();
    this.props.loadDropSites();
  }

  render() {
    const { user, checkedToken } = this.props;
    return (
      <div>
        <Router>
          { checkedToken &&
            <div className="App">
              {/* <Nav/>   */}
              <main>
                <Routes/>
              </main>
            </div>
          }
        </Router>
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