import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from './actions';

const NavLink = props => <Link {...props}/>;

function Nav({ user, signout }) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/home">donor</NavLink></li>
        <li>
          {!user  && <NavLink to="/" onClick={signout}>Logout</NavLink>}
        </li>
      </ul>
    </nav>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Nav);