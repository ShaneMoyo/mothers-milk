import React, { Component } from 'react';
import { connect } from 'react-redux';
import { donate } from './actions';

class MakeDonation extends Component {

  handleDonate = event => {
    event.preventDefault();
    const { dropSite, quantity } = event.target.elements;
    this.props.signin(
      { 
        quantity: quantity.value,
        dropSite: dropSite.value 
      });
  }

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleDonate(event)}>
          <label>quantity: <input name="quantity"/></label>
          <label>drop site: <input name="dropSite"/></label>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
}