import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from './actions';

const NavLink = props => <Link {...props}/>;

function Nav({ user, signout }) {
 const isAdmin = user ? user.roles.includes('admin') : false;
  return (
    <nav>
      <ul>
      { user &&
        <li>
          { 
            isAdmin ?
            <NavLink to="/admin">My Dashboard </NavLink> :
            <NavLink to="/home">My Donations</NavLink> 
          }
        </li>
      }
        <li>
          {/* {user  && <NavLink to="/" onClick={signout}>Logout</NavLink>} */}
        </li>
      </ul>
    </nav>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Nav);