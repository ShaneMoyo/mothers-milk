import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadUsers, updateUser, deleteUser } from './actions';


class AllUsers extends PureComponent {

  state = {
    editing: null
  }

  componentDidMount(){
    this.props.loadUsers();
  }

  handleUpdate = (event, item) => {
    event.preventDefault();
    const { elements: updates } = event.target;
    const updatedFields = Object.values(updates).filter(field => field.value !== '');
    updatedFields.forEach(field => { 
      field.name === 'roles' ? item.roles = [ field.value ] : item[field.name] = field.value;
    });
    this.props.updateUser(item);
  }

  handleDelete = id=> {
    this.props.deleteUser(id);
  }

  fieldCheck = item => {
    if (typeof item === 'object') {
      return item.name;
    } else if (typeof item === 'array') {
      return item[0];
    } else {
      return item;
    }
  };

  render() {
    const { users } = this.props;
    const { editing } = this.state;

    const tableusers = users.length ? users.map(item => {
      const rowusers = Object.values(item).filter(item => item !== null);
      const id = rowusers.shift();
      const row = rowusers.map((value, index) => <li style={{ display:'inline', margin:'5px' }}>{this.fieldCheck(value)}</li>);
      return (
        <ul>
          {row}
          <li style={{ display:'inline', margin:'5px' }}>{item.roles[0]}</li>
          <li style={{ display:'inline' }}><input type="button" value="X" onClick={() => this.handleDelete(id)}/></li>
          <li style={{ display:'inline' }}><input type="button" value="✎" onClick={() => this.setState({ editing: id })}/></li>
          {(editing === id) && 
          <li>
            <form onSubmit={event => this.handleUpdate(event, item)}>
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="email" placeholder="Email"/>
              <input type="text" name="roles" placeholder="Roles"/>
              <input type="submit"/>
            </form>
          </li>}
        </ul>
      );
    }): null;
    
    return(
      <div>
        <h3>Users</h3>
        <ul>
          {tableusers}
        </ul>
      </div>
    );
  }
}


export default connect(
  ({ auth, users }) => ({ user: auth.user, users }),
  { loadUsers, updateUser, deleteUser }
)(AllUsers);