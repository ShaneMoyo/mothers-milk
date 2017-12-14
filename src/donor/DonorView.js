import React, { Component } from 'react';
import DonorInfo from './DonorInfo';
import DropSites from '../dropSites/DropSites';
import Donations from '../donations/Donations';
import SupplyRequest from '../supplyRequest/SupplyRequest';
import Header from '../home/Header';
import Footer from '../home/Footer';
import { loadDropSites } from '../dropSites/actions';
import { loadDonations } from '../donations/actions';
import { connect } from 'react-redux';
import '../style/mystyle.css';


class DonorView extends Component {

  render() {

    const { user, donations } = this.props;
    user && this.props.loadDropSites();
    //user && this.props.loadDonations();

    return (
      <div>
        <Header/>
        <h1>hello { user ? user.name : 'no user' }</h1>
        <DonorInfo/>
        <div className="need-space"></div>
        <div className="container is-fluid">
          <div className="need-space"></div>
          <div className="tile is-ancestor">
            <DropSites/>
            <Donations/>
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
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDropSites, loadDonations }
)(DonorView);