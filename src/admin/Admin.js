import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllDonations from '../donations/AllDonations';
import AllDropSites from '../dropSites/AllDropSites';
import AllUsers from '../users/AllUsers';
import { signup } from '../home/actions';


class Admin extends Component {

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

  render(){
    return(
      <div>
        <h3>Create New User:</h3>
        <form onSubmit={event => this.handleSignUp(event)}>
          <label>name: <input name="name"/></label>
          <label>roles: <input name="roles"/></label>
          <label>email: <input name="email"/></label>
          <label>password: <input type="password" name="password"/></label>
          <input type="submit" ></input>
        </form>
        <br/>
        <h1> Donations </h1>
        <AllDonations/>
        <br/>
        <h1> Drop Sites </h1>
        <AllDropSites/>
        <br/>
        <h1> Users </h1>
        <AllUsers/>
      </div>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error,
  user: auth.user
}),
{ signup }
)(Admin);