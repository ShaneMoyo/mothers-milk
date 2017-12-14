import React, { Component } from 'react';
import Header from './Header';

import { connect } from 'react-redux';
import { signin, signup, signout } from './actions';
import DonorView from '../donor/DonorView';
import Admin from '../admin/Admin';

class Home extends Component {
  
  render(){
    const { user } = this.props;
    const isAdmin = user ? user.roles.includes('admin') : false;
    const view = isAdmin ? <Admin/> : <DonorView/> ;
    return(
      <div>
        <Header/>
        {user && view}
      </div>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{ signin, signup, signout }
)(Home);