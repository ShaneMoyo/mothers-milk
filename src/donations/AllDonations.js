import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations } from './actions';

class AllDonations extends PureComponent {
  state = {
    editing: null
  }



  render() {
    const { user, donations, loadDonations } = this.props;
    const { editing } = this.state;
   
    const header = donations.length ? Object.keys(donations[0]) : null;
    const headerItem = header ? header.map(item => <li style={{ display:'inline' }}>{item}</li>) : null; 
    const updateInputs = header ? header.map(item => <input type="text" placeholder={item}/>) : null;
    
    const tableData = donations.length ? donations.map(item => {
      const row = Object.values(item).map(value => <li style={{ display:'inline' }}>{value}</li>);
      return (
        <ul>
          {row}
          <li style={{ display:'inline' }}><label>delete</label><input type="checkbox"/></li>
          <li style={{ display:'inline' }}><input type="button" value="Update" onClick={() => this.setState({ editing: item._id })}/></li>
          { (editing === item._id) && <li><form>{updateInputs}<input type="submit"/></form></li>}
        </ul>
      );
    }): null;
    
    
    console.log(header);
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
  { loadDonations }
)(AllDonations);