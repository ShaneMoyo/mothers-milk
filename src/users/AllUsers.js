import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadUsers, updateUser, deleteUser } from './actions';
import Table from '../tables/Table';

class AllUsers extends PureComponent {

  render(){
    const { loadUsers, updateUser, deleteUser, users, user } = this.props;
    return(
      <Table load={loadUsers} update={updateUser} remove={deleteUser} data={users} user={user}/>
    );
  }
}

export default connect(
  ({ auth, users }) => ({ user: auth.user, users }),
  { loadUsers, updateUser, deleteUser }
)(AllUsers);