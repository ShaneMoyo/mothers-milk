import React, { Component } from 'react';
import HomeInfo from './HomeInfo';

import DropSites from '../dropSites/DropSites';
import SupplyRequest from '../supplyRequest/SupplyRequest';
import Header from './Header';
import Footer from './Footer';

import { checkForToken } from '../auth/actions';
import { loadDropSites } from '../dropSites/actions';

import { connect } from 'react-redux';

import '../style/mystyle.css';


class Home extends Component {

  componentDidMount() {
    // this.props.checkForToken();
    // this.props.loadDropSites();
  }

  render() {
    const { users } = this.props;
    users && this.props.loadDropSites();
    return (
      <div>
        <Header/>
        <h1>hello { users ? users.name : 'no user' }</h1>
        <HomeInfo/>
        <div className="need-space"></div>
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
  {  checkForToken, loadDropSites }
)(Home);