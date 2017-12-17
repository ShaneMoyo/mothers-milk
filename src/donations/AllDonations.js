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

  handleDelete = id => {
    this.props.deleteDonation(id);
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
}

  render() {
    const { donations } = this.props;
    const { editing } = this.state;
    const tableData = donations.length ? donations.map(item => {
      return (
        <tr>
          <td>{item.donor.name}</td>
          <td>{item.dropSite.name}</td>
          <td>{item.quantity}</td>
          <td>{item.status}</td>
          <td><input type="button" value="X" onClick={() => this.handleDelete(item._id)}/></td>
          <td><input type="button" value="✎" onClick={() => this.setState({ editing: item._id, show: !this.state.show })}/></td>
        </tr>
      );
    }): null;

    const editingTableData = donations.length ? donations.map(item => {
      return (

        <tr>
          <td>{item.donor.name}</td>
          <td>{item.dropSite.name}</td>
          <td>{item.quantity}</td>
          <td>{item.status}</td>
          <td><input type="button" value="X" onClick={() => this.handleDelete(item._id)}/></td>
          <td><input type="button" value="✎" onClick={() => this.setState({ editing: item._id, show: !this.state.show })}/></td>
          {((editing === item._id) && (this.state.show)) && 
            <td>
              <form onSubmit={event => this.handleUpdate(event, item)}>
                <select style={{ display:'inline', margin:'5px' }} name="status">
                  <option key="0" value="Pending">Pending</option>
                  <option key="1" value="Received">Received</option>
                  <option key="2" value="Missing">Missing</option>
                </select>
                <input style={{ display:'inline', margin:'5px' }} type="text" name="quantityReceived" placeholder="quantityReceived"/>
                <input style={{ display:'inline', margin:'5px' }}type="submit"/>
              </form>
            </td>
          }
        </tr>
      );
    }): null;
    
    return(
      <div className="column is-6 is-offset-3">
        <h3 className="title is-4">Donations</h3>
        <table>
          <th>Donor</th>
          <th>Drop Site</th>
          <th>Quantity</th>
          <th>Status</th>
          {this.state.editing ? editingTableData : tableData}
        </table>
      </div>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations, updateDonation, deleteDonation }
)(AllDonations);
