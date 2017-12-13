import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import User from '../user/User';
import DropSites from '../dropSites/DropSites';
import SupplyRequest from '../supplyRequest/SupplyRequest';
import Header from './Header';
import Footer from './Footer';
import { loadUserById } from '../user/actions';
import { checkForToken } from '../auth/actions';
import { loadDropSites } from '../dropSites/actions';

import { connect } from 'react-redux';

import '../style/mystyle.css';


class Home extends Component {

  componentDidMount() {
    this.props.checkForToken();
    this.props.loadDropSites();
    // this.props.loadUserById('5a3049a9b9b5be39a648906c');
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <Header/>
        <HomeInfo/>
        <div className="need-space"></div>
        <h1>hello { users ? users.name : 'no user' }</h1>
        
        <div className="container is-fluid">
          <div className="need-space"></div>
          <div className="tile is-ancestor">
            <DropSites/>
            <SupplyRequest/>
          </div>
          <div className="need-space"></div>
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  { loadUserById, checkForToken, loadDropSites }
)(Home);