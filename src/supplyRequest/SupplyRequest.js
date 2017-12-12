import React, { Component } from 'react';


class SupplyRequest extends Component {
  state = {
    target: 'off'
  }

  // handleChecked = (event) => {
  //   console.log('event target', event.target.value);
  //   const checked = event.target.value;
  //   this.setState({ target: checked });
  // }

  handleSubmit = (supplies) => {
    
  }

  render() {
    const { target } = this.state;
    return (

      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box hero is-primary">
          <div className="sub-title"><strong>Request Supplies</strong></div>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control">
                <div className="input-title">
                  <label>Milk Collection Bags: </label>
                  <select name="bags">
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </div>
                {/* <input type="checkbox" onChange={this.handleChecked} /> */}
                {/* {(target === 'on') && <InputBox/>} */}
                <div className="input-title">
                  <label>Shipping Boxes: </label>
                  <select name="boxes">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div> 
                {/* <input type="checkbox" /> */}
              </div>
              <button className="button" onSubmit={this.handleSubmit}>Submit</button>
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

class InputBox extends Component {
  render() {
    const { target, onChange } = this.props;
    return(
      <div>
        <br/>
        <label>Quantity: <input type="text"/></label>
      </div>
    );
  }

}

export default SupplyRequest;