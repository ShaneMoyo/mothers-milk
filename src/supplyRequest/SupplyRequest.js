import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSupply } from './actions';

class SupplyRequest extends Component {
  constructor(){
    super();
    this.state={ display: false };
    this.handleClick = this.handleClick.bind(this);
  }
  

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

  handleClick() {
    this.setState({ display: !this.state.display });
  }
  render() {
    const { bags } = this.props;
   
    return (

      <div className="tile is-parent">
        <div className="tile is-child box hero is-info">
          <div className="sub-title"><a onClick={this.handleClick}><strong>Request Supplies</strong></a></div>
          <div>
            {this.state.display && <form onSubmit={event => this.handleSupplyRequest(event)}>
              <div className="field">
                <div className="control">
                  <div className="input-title">
                    <div className="inputLabel">Milk Collection Bags: </div>
                    <div className="select is-small">
                      <select name="bags">
                        <option value="0">0</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <div className="input-title">
                      <div className="inputLabel">Shipping Boxes: </div>
                      <div className="select is-small">
                        <select name="boxes">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="need-space"></div>
                  <input type="submit" className="button is-small"/>
                  { bags ? <p>Thank you for your order</p> : <p></p>}
                </div>
              </div>
            </form> }
          </div>
          
        </div>
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({ user: auth.user }),
  { requestSupply }
)(SupplyRequest);

