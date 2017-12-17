import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations, updateDonation, deleteDonation } from './actions';
import Table from '../tables/Table';

class AllDonations extends PureComponent {
  state = {
  }

  componentDidMount(){
    this.props.loadDonations();
  }

  handleUpdate = (item) => {
    let update = this.state;
    update._id = item._id;
    this.props.updateDonation(update);
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
    const tableData = donations.length ? donations.map(item => {
      const statuses = ['Missing', 'Received', 'Pending'];
      const index = statuses.findIndex(status => status === item.status);
      const options = statuses.map((status, i) => i === index ? <option selected value={status}>{status}</option> : <option value={status}>{status}</option>);
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
          <td><input type="button" value="X" onClick={() => this.handleDelete(item._id)}/></td>
          <td><input type="button" value="✎" onClick={() => this.setState({ editing: item._id, show: !this.state.show })}/></td>
          <td><input type="submit" value="Update" onClick={() => this.handleUpdate(item)}/></td>
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
