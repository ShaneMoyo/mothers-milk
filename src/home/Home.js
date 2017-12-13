import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import DropSites from '../dropSites/DropSites';
import SupplyRequest from '../supplyRequest/SupplyRequest';
import Header from './Header';
import Footer from './Footer';
import { loadDropSites } from '../dropSites/actions';
import { connect } from 'react-redux';
import '../style/mystyle.css';


class Home extends Component {

  render() {

    const { user } = this.props;
    user && this.props.loadDropSites();

    return (
      <div>
        <Header/>
        <h1>hello { user ? user.name : 'no user' }</h1>
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



export default connect(
  ({ auth }) => ({ user: auth.user }),
  { loadDropSites }
)(Home);