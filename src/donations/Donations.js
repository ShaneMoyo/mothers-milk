import React, { Component } from 'react';
import { loadMyDonations } from '../donations/actions';
import { connect } from 'react-redux';
import { checkForToken } from '../home/actions';
import AddDonation from './AddDonations';


class Donations extends Component {

  constructor(){
    super();
    this.state={ 
      displayMain: false,
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {  loadMyDonations } = this.props;
    loadMyDonations();
  }

  handleClick() {
    this.setState({ displayMain: !this.state.displayMain });
  }

  render() {

    const { donations, user } = this.props;
    const { displayMain, display } = this.state;
    return (
      <div className="tile is-parent">
        <div className="tile is-child box">
          <a className="subtitle has-text-primary hover" onClick={this.handleClick}>Ready to Donate?</a>
          {displayMain &&
          <div>
            <hr/>
            <AddDonation user={user}/>
            <hr/>
            <button className="button is-light" onClick={() =>  this.setState({ display: true  })}>Total amount donated</button>
            {display && <ul>
              {donations.map((donation) => (
                <li key={donation._id}>
                  {donation.quantity} status: {donation.status && donation.status}
                </li>
              ))}
            </ul>
            }
          </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    donations: state.donations,
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  { loadMyDonations, checkForToken }
)(Donations);