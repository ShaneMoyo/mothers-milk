import React, { Component } from 'react';
import { loadMyDonations } from '../donations/actions';
import { connect } from 'react-redux';
import { checkForToken } from '../home/actions';
import AddDonation from './AddDonations';


class Donations extends Component {

  state={
    display: false
  }

  componentDidMount() {
    const {  loadMyDonations } = this.props;
    loadMyDonations();
  }

  render() {

    const { donations, user } = this.props;
    const { display } = this.state;
    return (
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="subtitle">Ready to Donate?</h2>
          <AddDonation user={user}/>
          <button className="button is-light" onClick={() =>  this.setState({ display: true  })}>Total amount donated</button>
          {this.state.display && <ul>
            {donations.map((donation) => (
              <li key={donation._id}>
                {donation.quantity} status: {donation.status && donation.status}
              </li>
            ))}
          </ul>
          }
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
  { loadMyDonations, checkForToken }
)(Donations);