import React, { Component } from 'react';

class RequestInfo extends Component {
    render() {
        return(
            <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box hero is-primary">
                <div className="sub-title"><strong>Request Shipping Materials</strong></div>
                <form>
                    <div className="field">
                        <div className="control">
                           <div className="input-title">Shipping Materials</div> <input type="checkbox"/>
                           <div className="input-title">Storage Materials</div> <input type="checkbox"/>
                         </div>
                         <button className="button" >Submit</button>
                    </div>  
                </form>
            </div>
            <div className="tile is-child box hero is-success">
                <h3>We can out additional info here</h3>
            </div>
        </div>
        );
    }
}

export default RequestInfo;