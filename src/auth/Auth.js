import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from './actions';
import SignIn from './SignIn';

class Auth extends Component {

  render(){
    const { signin } = this.props;

    return (
      <div>
        <SignIn submit={signin}/>
      </div>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{ signin }
)(Auth);