import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadDonations } from './actions';

class AllDonations extends PureComponent {

  render() {
    const { user, donations, loadDonations } = this.props;
   
    const header = donations.length ? Object.keys(donations[0]) : null;
    const headerItem = header ? header.map(item => <th>{item}</th>) : null; 
    
    const tableData = donations.length ? donations.map(item => {
      const row = Object.values(item).map(value => <td>{value}</td>);
      return <tr>{row}</tr>;
    }): null;
    
    
    console.log(header);
    return(
      <div>
        <button onClick={loadDonations}>Load Donations</button>
        <table>
          <tr>
            {headerItem} 
          </tr>
          {tableData}
        </table>
      </div>
    );
  }
}

export default connect(
  ({ auth, donations }) => ({ user: auth.user, donations }),
  { loadDonations }
)(AllDonations);