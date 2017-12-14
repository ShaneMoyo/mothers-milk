import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonation } from './actions';

class AddDonations extends Component {

  constructor(){
    super();
    this.state = {
      showMessage: false
    };
  }

  handleDonate = event => {
    event.preventDefault();
    const { dropSite, quantity, lastDonation } = event.target.elements;
    const { user } = this.props;
    this.props.addDonation(
      { 
        quantity: quantity.value,
        dropSite: dropSite.value,
        lastDonation: lastDonation.value,
        donor: user._id,
        status: 'pending',
        quantityReceived: 0
      });
    this.setState({ showMessage: true });
    window.setTimeout(() => {
      this.setState({ showMessage: false });
    }, 5000);
  }

  render() {
    const message = 'Thank you for donating';
    const { dropSites } = this.props;
   
    const listOfDropSites = dropSites && dropSites.map(dropSite =>(
      <option key={dropSite._id} value={dropSite._id}>{dropSite.name}</option>
    ));
    
    
    return (
      
      <div>
        {(this.state.showMessage) ? <p>{message}</p> : 
          (<div>
            <form onSubmit={event => this.handleDonate(event)}>
              <p className="subtitle is-6">Shipping milk by FedEx?   &nbsp;<input type="checkbox"/>
              </p>
              <p className="subtitle is-6">-- OR --</p>
              
              <p className="subtitle is-6">Dropping off at a local milk drop?
              </p>
              <p className="subtitle is-6">Drop site location?</p>
              <select name="dropSite" className="button is-outlined">
                {listOfDropSites}
              </select><br/>
              <label className="subtitle is-6">quantity(in ounces): <input className="button is-outlined" placeholder="quantity"/></label>
              <br/>
              <label className="subtitle is-6">Is this your last donation?&nbsp;<input name="lastDonation" type="checkbox"/></label>
              <br/>
              <button className="button is-dark" type="submit">Submit</button>
            </form>
          </div>
          )
        }
      </div>
    );
  }
}

export default connect(
  ({ donations, dropSites }) => ({ donations, dropSites }),
  { addDonation }
)(AddDonations);

 
    
  
    
