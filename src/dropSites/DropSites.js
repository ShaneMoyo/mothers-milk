import React, { Component } from 'react';

class DropSites extends Component {
  render() {
    return (
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="subtitle">Locations</h2>
          <ul>
            <li>$location1</li>
            <li>$location2</li>
            <li>$location3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropSites;