import React, { Component } from 'react';
import '../style/mystyle.css';
import Nav from '../auth/Nav';

class Header extends Component {
  render() {
    return (
      <div>
        <Nav/>
      </div>
    );
  }
}

export default Header;