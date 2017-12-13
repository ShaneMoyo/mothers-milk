import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, signup, signout } from './actions';


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

  handleSignUp = event => {
    event.preventDefault();
    const { email, password, name, roles } = event.target.elements;
    this.props.signup(
      { 
        name: name.value,
        email: email.value,
        password: password.value, 
        roles: roles.value
      });
  }

  handleSignOut = () => this.props.signout();

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleSignIn(event)}>
          <label>email: <input name="email"/></label>
          <label>password: <input type="password" name="password"/></label>
          <input type="submit" ></input>
        </form>
        <form onSubmit={event => this.handleSignUp(event)}>
          <label>name: <input name="name"/></label>
          <label>roles: <input name="roles"/></label>
          <label>email: <input name="email"/></label>
          <label>password: <input type="password" name="password"/></label>
          <input type="submit" ></input>
        </form>
        <input type="submit" value="sign out" onClick={this.handleSignOut}></input>
      </div>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{ signin, signup, signout }
)(Auth);