import React, { Component } from 'react';
import { loadDropSites } from '../dropSites/actions';
import { connect } from 'react-redux';


class DropSites extends Component {

  componentDidMount() {
    console.log('did mount drop sites');
    //this.props.loadDropSites();
  }

  render() {

    const { dropSites } = this.props;

    return (
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="subtitle">Locations</h2>
          <ul>
            {dropSites.map((dropSite) => (
              <li key={dropSite._id}>
                {dropSite.name}<br/>
                {dropSite.address}<br/>
                {dropSite.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dropSites: state.dropSites
  };
}

export default connect(
  mapStateToProps,
  { loadDropSites }
)(DropSites);