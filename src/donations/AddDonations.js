import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonation } from './actions';

class AddDonations extends Component {

  constructor(){
    super();
    this.state = {
      showMessage: false,
      dropSite: ''
    };
  }

  handleChange = (event) => {
    const checkedFedEx = event.target.checked ? 'FedEx' : '';
    this.setState({
      dropSite: checkedFedEx
    });
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
   
    const listOfDropSites = dropSites && dropSites.map(dropSite => (
      <option key={dropSite._id} value={dropSite._id}>{dropSite.name}</option>
    ));
    
    
    return (
      
      <div>
        {(this.state.showMessage) ? <p>{message}</p> : 
          (<div>
            <form onSubmit={event => this.handleDonate(event)}>
              <p className="subtitle is-6">Ship milk by FedEx   &nbsp;<input type="checkbox" value="FedEx" onChange={this.handleChange}/>
              </p>
              {(this.state.dropSite !== 'FedEx') && (
                <div>
                  <p className="subtitle is-6">-- OR --</p>
              
                  <p className="subtitle is-6">Drop at nearest milk drop location
                  </p>
                  <label className="subtitle is-6">
              Select a drop site location</label>
                  <div className="select">
                    <select name="dropSite" className="button is-outlined is-size-6">
                      {listOfDropSites}
                    </select>
                  </div>
                </div>
              )}
              <br/><br/>
              <label className="subtitle is-6">quantity(in ounces): <input className="button is-outlined" name="quantity" placeholder="quantity"/></label>
              <br/><br/>
              <label className="subtitle is-6">Is this your last donation?&nbsp;<input name="lastDonation" type="checkbox"/></label>
              <br/><br/>
              <button className="button is-dark" type="submit">Submit</button>
              <br/><br/>
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

 
    
  
    
