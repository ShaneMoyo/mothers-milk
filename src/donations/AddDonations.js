import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonation } from './actions';

class AddDonations extends Component {

  handleDonate = event => {
    event.preventDefault();
    const { dropSite, quantity } = event.target.elements;
    const { user } = this.props;
    this.props.addDonation(
      { 
        quantity: quantity.value,
        dropSite: dropSite.value,
        donor: user._id
      });
  }

  render(){
    const { dropSites } = this.props;
   
    const listOfDropSites = dropSites && dropSites.map(dropSite =>(
      <option key={dropSite._id} value={dropSite._id}>{dropSite.name}</option>
    ));
    
    return (
      <div>
        <form onSubmit={event => this.handleDonate(event)}>
          <label>quantity: <input name="quantity" placeholder="quantity"/></label>
          <select name="dropSite">
            {listOfDropSites}
          </select>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ donations, dropSites }) => ({ donations, dropSites }),
  { addDonation }
)(AddDonations);