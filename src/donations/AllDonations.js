import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations, updateDonation, deleteDonation } from './actions';


class AllDonations extends PureComponent {

  componentDidMount(){
    this.props.loadDonations();
  }

  handleUpdate = _id => {
    this.props.updateDonation({ ...this.state, _id });
  }

  handleDelete = id => {
    this.props.deleteDonation(id);
  }

  handleChange = ({ target: input }) => this.setState({ [input.name]: input.value });
  
  render() {
    const { donations } = this.props;
    const tableData = donations.length ? donations.map(item => {
      const { _id: id } = item;
      const statusOptions = ['Missing', 'Received', 'Pending'];
      const currentStatusIndex = statusOptions.findIndex(status => status === item.status);
      const options = statusOptions.map((status, i) => i === currentStatusIndex ? <option selected value={status}>{status}</option> : <option value={status}>{status}</option>);
      return (
        <tr>
          <td>{item.donor.name}</td>
          <td>{item.dropSite.name}</td>
          <td><input type="text" placeholder={item.quantity} name="quantity" onChange={event => this.handleChange(event)}/></td>
          <td>
            <select type="text" name="status" onChange={event => this.handleChange(event)}>
              {options}
            </select>
          </td>
          <td><input type="button" value="X" onClick={() => this.handleDelete(id)}/></td>
          <td><input type="button" value="✎" onClick={() => this.setState({ editing: id, show: !this.state.show })}/></td>
          <td><input type="submit" value="Update" onClick={() => this.handleUpdate(id)}/></td>
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
          {tableData}
        </table>
      </div>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations, updateDonation, deleteDonation }
)(AllDonations);
