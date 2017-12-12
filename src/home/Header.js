import React, { Component } from 'react';
import '../style/mystyle.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a className="navbar-item" to="/">Home</a>
          <a className="navbar-item" to="/about">About</a>
          <div className="navbar-end">
            <div className="navbar-item"><strong>Mother's Milk</strong></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;