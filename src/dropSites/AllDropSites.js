import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDropSites, updateDropSite, deleteDropSite } from './actions';
import Table from '../tables/Table';

class AllDropSites extends PureComponent {

  render(){
      const { loadDropSites, updateDropSite, deleteDropSite, dropSites, user } = this.props;
      return(
        <Table load={loadDropSites} update={updateDropSite} remove={deleteDropSite} data={dropSites} user={user}/>
      );
    }
  }

export default connect(
  ({ auth, dropSites }) => ({ user: auth.user, dropSites }),
  { loadDropSites, updateDropSite, deleteDropSite }
)(AllDropSites);
