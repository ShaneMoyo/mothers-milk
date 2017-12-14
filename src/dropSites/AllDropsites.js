import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDropsites, updateDropsite, deleteDropsite } from './actions';

class AllDropSites extends PureComponent {
  state = {
    editing: null
  }

  componentDidMount(){
    this.props.loadDonations()
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

  fieldCheck = item => typeof item !== 'object' ? item : item.name;

  render() {
    const { user, donations, loadDonations } = this.props;
    const { editing } = this.state;

    const fields = donations.length && Object.keys(donations[0]);
    fields && fields.shift();

    const updateInputs = fields ? fields.map(item => <input type="text" name={typeof item !== 'object' ? item : null} placeholder={this.fieldCheck(item)}/>) : null;
    const tableData = fields ? donations.map(item => {
      const rowData = Object.values(item);
      const id = rowData.shift();
      const row = rowData.map((value, index) => <li style={{ display:'inline' }}>{this.fieldCheck(value)}</li>);
      return (
        <ul>
          {row}
          <li style={{ display:'inline' }}><input type="button" value="X" onClick={() => this.handleDelete(id)}/></li>
          <li style={{ display:'inline' }}><input type="button" value="✎" onClick={() => this.setState({ editing: id })}/></li>
          {(editing === id) && <li><form onSubmit={event => this.handleUpdate(event, item)}>{updateInputs}<input type="submit"/></form></li>}
        </ul>
      );
    }): null;
    
    return(
      <div>
        <h3> All Donations </h3>
        <ul>
          {tableData}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations, updateDonation, deleteDonation }
)(AllDonations);