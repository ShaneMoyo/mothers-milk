import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin, signup, signout } from './actions';
import { NavLink } from 'react-router-dom';
import DonorView from '../donor/DonorView';
import Admin from '../admin/Admin';

class Header extends Component {

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
    return (
      <section className="section hero is-info">
        
        <div className="tile level-right">
          <form className="field" onSubmit={event => this.handleSignIn(event)}>
            {!user && <div>
              <div className="control">
                <input className="input"  placeholder="email" name="email"/>
              </div>
              <div className="control">
                <input className="input" type="password" placeholder="password" name="password"/>
              </div>
              <div className="control">
                <input className="button" type="submit"/>
              </div>
            </div>}
            {user  && <NavLink className="button" to="/" onClick={signout}>Logout</NavLink>}
          </form>
        </div>

      </section>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{ signin, signup, signout }
)(Header);