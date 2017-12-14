import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllDonations from '../donations/AllDonations';


class Admin extends Component {

render(){
  return(
    <div>
      <AllDonations/>
    </div>
  );
}
};

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{  }
)(Admin);