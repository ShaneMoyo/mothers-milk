import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import User from '../user/User';
import DropSites from '../dropSites/DropSites';
import SupplyRequest from '../supplyRequest/SupplyRequest';
import Header from './Header';
import Footer from './Footer';
import { loadUserById } from '../user/actions';
import { connect } from 'react-redux';

import '../style/mystyle.css';


class Home extends Component {

  componentDidMount() {
    this.props.loadUserById('5a3057210460df70f8ac4c4c');
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <Header/>
        <HomeInfo/>
        <div className="need-space"></div>
        <h1>hello { users ? users.name : 'no user' }</h1>
        <User users={users}/>
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
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  { loadUserById }
)(Home);