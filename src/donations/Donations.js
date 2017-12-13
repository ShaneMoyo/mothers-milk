import React, { Component } from 'react';
import { connect } from 'react-redux';

class MakeDonation extends Component {

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleSignIn(event)}>
          <label>quantity: <input name="quantity"/></label>
          <label>drop site: <input name="dropSite"/></label>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
}