import React, { Component } from 'react';
import { loadDonations } from '../donations/actions';
import { connect } from 'react-redux';


class Donations extends Component {

  componentDidMount() {
    this.props.loadDonations();
    console.log('in donations', this.props);
  }

  render() {

    const { donations } = this.props;

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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    donations: state.donations
  };
}

export default connect(
  mapStateToProps,
  { loadDonations }
)(Donations);