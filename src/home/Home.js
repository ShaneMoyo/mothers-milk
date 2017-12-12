import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import UserInfo from '../user/User';
import DropSites from '../dropSites/DropSites';
import SupplyRequest from '../supplyRequest/SupplyRequest';
import Header from './Header';
import Footer from './Footer';

import '../style/mystyle.css';


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomeInfo/>
        <div className="need-space"></div>
        <UserInfo/>
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

export default Home;