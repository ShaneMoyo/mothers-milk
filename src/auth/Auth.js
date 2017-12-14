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