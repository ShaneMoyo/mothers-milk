import React, { Component } from 'react';
import { loadMyDonations } from '../donations/actions';
import { connect } from 'react-redux';
import { checkForToken } from '../home/actions';
import AddDonation from './AddDonations';


class Donations extends Component {

  constructor(){
    super();
    this.state={ display1: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {  loadMyDonations } = this.props;
    loadMyDonations();
  }

  handleClick() {
    this.setState({ display1: !this.state.display1 });
  }

  render() {

    const { donations, user } = this.props;
    const { display, display1 } = this.state;
    return (
      <div className="tile is-parent is-pulled-left">
        <div className="tile is-child box">
          <a className="subtitle has-text-primary" onClick={this.handleClick}>Ready to Donate?</a>
          {display1 &&
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