import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDropSites, updateDropSite, deleteDropSite } from './actions';

class AllDropSites extends PureComponent {
  state = {
    editing: null
  }

  componentDidMount(){
    this.props.loadDropSites()
  }

  handleUpdate = (event, item) => {
    event.preventDefault();
    const { elements: updates } = event.target;
    const updatedFields = Object.values(updates).filter(field => field.value !== '');
    updatedFields.forEach(field =>  item[field.name] = field.value);
    this.props.updateDropSite(item);
  }

  handleDelete = id=> {
    this.props.deleteDropsite(id);
  }

  fieldCheck = item => typeof item !== 'object' ? item : item.name;

  render() {
    const { user, dropSites, loadDropsites } = this.props;
    const { editing } = this.state;

    const fields = dropSites.length && Object.keys(dropSites[0]);
    fields && fields.shift();

    const updateInputs = fields ? fields.map(item => <input type="text" name={typeof item !== 'object' ? item : null} placeholder={this.fieldCheck(item)}/>) : null;
    const tableData = fields ? dropSites.map(item => {
      const rowData = Object.values(item);
      const id = rowData.shift();
      const row = rowData.map((value, index) => <li style={{ display:'inline', margin:'5px' }}>{this.fieldCheck(value)}</li>);
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
        <h3> All dropSites </h3>
        <ul>
          {tableData}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ auth, dropSites }) => ({ user: auth.user, dropSites }),
  { loadDropSites, updateDropSite, deleteDropSite }
)(AllDropSites);