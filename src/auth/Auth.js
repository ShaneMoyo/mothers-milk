import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, signup, signout } from './actions';
import { Link } from 'react-router-dom';
import Home from '../home/Home';
import Admin from '../admin/Admin';

const NavLink = props => <Link {...props}/>;

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
    const { user } = this.props;
    const isAdmin = user ? user.roles.includes('admin') : false;
    const view = isAdmin ? <Admin/> : <Home/>
    return (
      <div>
        <form onSubmit={event => this.handleSignIn(event)}>
          <label>email: <input name="email"/></label>
          <label>password: <input type="password" name="password"/></label>
          <input type="submit"/>
        </form>
        <h3>Create New User:</h3>
        <form onSubmit={event => this.handleSignUp(event)}>
          <label>name: <input name="name"/></label>
          <label>roles: <input name="roles"/></label>
          <label>email: <input name="email"/></label>
          <label>password: <input type="password" name="password"/></label>
          <input type="submit" ></input>
        </form>
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
)(Auth);