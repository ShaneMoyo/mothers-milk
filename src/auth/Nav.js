import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import signout from './actions';

const NavLink = props => <Link {...props}/>;

function Nav({ user, signout }) {
  return (
    <nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/home">donor</NavLink></NavItem>
        <NavItem>
          {!user  && <NavLink to="/" onClick={signout}>Logout</NavLink>}
        </NavItem>
      </NavList>
    </nav>
  );
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Nav);