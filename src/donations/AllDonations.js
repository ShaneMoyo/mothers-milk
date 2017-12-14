import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations, updateDonation } from './actions';

class AllDonations extends PureComponent {
  state = {
    editing: null
  }

  handleUpdate = (event, item) => {
    event.preventDefault();
    const { elements } = event.target;
    console.log('before map ', item);
    const updateObj = { ...item };
    const elementMap = Object.values(elements);
    const filterMap = elementMap.filter(ele => ele.value !== '');
    console.log('filtermap ==================', filterMap);
    filterMap.map(ele => {
      return updateObj[ele.name] = ele.value;
    });
    console.log('updating too', updateObj);
    this.props.updateDonation(updateObj);
  }

  render() {
    const { user, donations, loadDonations } = this.props;
    const { editing } = this.state;
    
    const header = donations.length ? Object.keys(donations[0]) : null;
    const headerItem = header ? header.map(item => <li style={{ display:'inline' }}>{typeof item !== 'object' ? item : item.name}</li>) : null; 
    const id = header && header.shift();
    const updateInputs = header ? header.map(item => <input type="text" name={typeof item !== 'object' ? item : null} placeholder={typeof item !== 'object' ? item : item.name}/>) : null;
    const tableData = donations.length ? donations.map(item => {
      const array = Object.values(item);
      const id = array.shift();
      const row = array.map((value, index) => <li style={{ display:'inline' }}>{typeof value !== 'object' ? value : value.name}</li>);
      return (
        <ul>
          {row}
          <li style={{ display:'inline' }}><input type="button" value="X"/></li>
          <li style={{ display:'inline' }}><input type="button" value="✎" onClick={() => this.setState({ editing: id })}/></li>
          { (editing === id) && <li><form onSubmit={event => this.handleUpdate(event, item)}>{updateInputs}<input type="submit"/></form></li>}
        </ul>
      );
    }): null;
    
    return(
      <div>
        <button onClick={loadDonations}>Load Donations</button>
        <ul>
          <li>
            {headerItem} 
          </li>
          {tableData}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations, updateDonation }
)(AllDonations);