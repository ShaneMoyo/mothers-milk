import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import UserInfo from './UserInfo';
import LocationInfo from './LocationInfo';
import RequestInfo from './RequestInfo';
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
            <LocationInfo/>
            <RequestInfo/>
          </div>
          <div className="need-space"></div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;