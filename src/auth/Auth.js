import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from './actions';


class Auth extends Component {

  handleSignIn = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    this.props.signin(
      { 
        email: email.value,
        password: password.value 
      });
  }

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleSignIn(event)}>
          <label>email: <input name="email"/></label>
          <label>password: <input type="password" name="password"/></label>
          <input type="submit" ></input>
        </form>  
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