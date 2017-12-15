import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations, updateDonation, deleteDonation } from './actions';
import Table from '../tables/Table';

class AllDonations extends PureComponent {

  render(){
    const { loadDonations, updateDonation, deleteDonation, donations, user } = this.props;
    return(
      <Table load={loadDonations} update={updateDonation} remove={deleteDonation} data={donations} user={user}/>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations, updateDonation, deleteDonation }
)(AllDonations);



