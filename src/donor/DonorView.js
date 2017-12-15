import React, { Component } from 'react';
import DonorInfo from './DonorInfo';
import DropSites from '../dropSites/DropSites';
import Donations from '../donations/Donations';
import SupplyRequest from '../supplyRequest/SupplyRequest';
// import Header from '../home/Header';
import Footer from '../home/Footer';
import { loadDropSites } from '../dropSites/actions';
import { loadDonations } from '../donations/actions';
import { connect } from 'react-redux';
import '../style/mystyle.css';


class DonorView extends Component {
  componentDidMount() {
    this.props.loadDropSites();
  }

  render() {

    const { user, donations } = this.props;

    //user && this.props.loadDonations();

    return (
      <div>
        <div>
          <br/><br/>
          <h1 className="title">Welcome { user ? user.name : '' }</h1>
          <h2 className="subtitle">Thank you for participating in the milk drop program.</h2>
        </div>
        {/* <div className="need-space"></div> */}
        <div className="container is-fluid">
          <div className="need-space"></div>
          <div className="tile is-ancestor">
            <Donations/>
            <DropSites/>
            <SupplyRequest/>
            <DonorInfo/>
          </div>
          <div className="need-space"></div>
        </div>
      </div>
    );
  }
}



export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDropSites, loadDonations }
)(DonorView);