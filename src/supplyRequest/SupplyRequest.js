import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSupply } from './actions';

class SupplyRequest extends Component {

  handleSupplyRequest = event => {
    event.preventDefault();
    const { bags, boxes } = event.target.elements;
    const { user } = this.props;
    this.props.requestSupply(
      { 
        bags: bags.value,
        boxes: boxes.value,
        donor: user._id
      });
  }


  

  render() {
    const { bags, boxes } = this.props;
    return (

      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box hero is-primary">
          <div className="sub-title"><strong>Request Supplies</strong></div>
          <form onSubmit={event => this.handleSupplyRequest(event)}>
            <div className="field">
              <div className="control">
                <div className="input-title">
                  <label>Milk Collection Bags: </label>
                  <select name="bags">
                    <option value="0">0</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="input-title">
                  <label>Shipping Boxes: </label>
                  <select name="boxes">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <input type="submit" className="button"/>
              { bags ? <p>Thank you for your order</p> : <p></p>}
            </div>
          </form>
        </div>
        <div className="tile is-child box hero is-success">
          <h3>We can put additional info here</h3>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({ user: auth.user }),
  { requestSupply }
)(SupplyRequest);

