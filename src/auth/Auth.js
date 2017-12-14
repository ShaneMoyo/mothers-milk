import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, signup, signout } from './actions';
import { NavLink } from 'react-router-dom';
import Home from '../home/Home';
import Admin from '../admin/Admin';

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
    const { user , signout } = this.props;
    const isAdmin = user ? user.roles.includes('admin') : false;
    const view = isAdmin ? <Admin/> : <Home/> ;
    
    return (
      <div>
        <form className="column is-one-quarter" onSubmit={event => this.handleSignIn(event)}>
          {!user && <div>
            <div class="control">
              <input className="input"  placeholder="email" name="email"/>
            </div>
            <input className="input" type="password" placeholder="password" name="password"/>
            <input className="button" type="submit"/>
          </div>}
          {user  && <NavLink className="button" to="/" onClick={signout}>Logout</NavLink>}
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