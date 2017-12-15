import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations, updateDonation, deleteDonation } from './actions';
import Table from '../tables/Table';

class AllDonations extends PureComponent {
  state = {
    editing: null
  }

  componentDidMount(){
    this.props.loadDonations();
  }

  handleUpdate = (event, item) => {
    event.preventDefault();
    const { elements: updates } = event.target;
    const updatedFields = Object.values(updates).filter(field => field.value !== '');
    updatedFields.forEach(field =>  item[field.name] = field.value);
    this.props.updateDonation(item);
  }

  handleDelete = id=> {
    this.props.deleteDonation(id);
  }

  fieldCheck = item => {
   
    return typeof item === 'object' ? item.name : item;
  };

  render() {
    const { donations } = this.props;
    const { editing } = this.state;

    const tabledonations = donations.length ? donations.map(item => {
      const rowdonations = Object.values(item).filter(item => item !== null);
      const id = rowdonations.shift();
      const row = rowdonations.map((value, index) => <li style={{ display:'inline', margin:'5px' }}>{this.fieldCheck(value)}</li>);
      return (
        <ul>
          {row}
          <li style={{ display:'inline' }}><input type="button" value="X" onClick={() => this.handleDelete(id)}/></li>
          <li style={{ display:'inline' }}><input type="button" value="✎" onClick={() => this.setState({ editing: id })}/></li>
          {(editing === id) && 
          <li>
            <form onSubmit={event => this.handleUpdate(event, item)}>
              <input type="text" name="status" placeholder="Received?"/>
              <input type="text" name="quantityReceived" placeholder="quantityReceived"/>
              <input type="submit"/>
            </form>
          </li>}
        </ul>
      );
    }): null;
    
    return(
      <div>
        <h3>Donations</h3>
        <ul>
          {tabledonations}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations, updateDonation, deleteDonation }
)(AllDonations);

