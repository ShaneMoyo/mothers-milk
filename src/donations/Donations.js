import React, { Component } from 'react';
import { loadDonations } from '../donations/actions';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import AddDonation from './AddDonations';


class Donations extends Component {

  componentDidMount() {
    const {  loadDonations, user } = this.props; 
    user && loadDonations();
  }

  render() {

    const { donations, user } = this.props;
    return (
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="subtitle">Donations</h2>
          <ul>
            {donations.map((donation) => (
              <li key={donation._id}>
                {donation.quantity}
              </li>
            ))}
          </ul>
          <AddDonation user={user}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    donations: state.donations,
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  { loadDonations, checkForToken }
)(Donations);