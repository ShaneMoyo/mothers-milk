import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDropSites, updateDropSite, deleteDropSite } from './actions';


class AllDropSites extends PureComponent {
  state = {
    editing: null
  }

  componentDidMount(){
    this.props.loadDropSites();
  }

  handleUpdate = (event, item) => {
    event.preventDefault();
    const { elements: updates } = event.target;
    const updatedFields = Object.values(updates).filter(field => field.value !== '');
    updatedFields.forEach(field =>  item[field.name] = field.value);
    this.props.updateDropSite(item);
  }

  handleDelete = id=> {
    this.props.deleteDropSite(id);
  }

  fieldCheck = item => {
   
    return typeof item === 'object' ? item.name : item;
  };

  render() {
    const { dropSites } = this.props;
    const { editing } = this.state;

    const tabledropSites = dropSites.length ? dropSites.map(item => {
      const rowdropSites = Object.values(item).filter(item => item !== null);
      const id = rowdropSites.shift();
      const row = rowdropSites.map((value, index) => <li style={{ display:'inline', margin:'5px' }}>{this.fieldCheck(value)}</li>);
      return (
        <ul>
          {row}
          <li style={{ display:'inline' }}><input type="button" value="X" onClick={() => this.handleDelete(id)}/></li>
          <li style={{ display:'inline' }}><input type="button" value="✎" onClick={() => this.setState({ editing: id, show: !this.state.show })}/></li>
          {((editing === id) && (this.state.show)) && 
          <li>
            <form onSubmit={event => this.handleUpdate(event, item)}>
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="address" placeholder="Address"/>
              <input type="text" name="hours" placeholder="Hours"/>
              <input type="submit"/>
            </form>
          </li>}
        </ul>
      );
    }): null;
    
    return(
      <div>
        <h3>dropSites</h3>
        <ul>
          {tabledropSites}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ auth, dropSites }) => ({ user: auth.user, dropSites }),
  { loadDropSites, updateDropSite, deleteDropSite }
)(AllDropSites);
