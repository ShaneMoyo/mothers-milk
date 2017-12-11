import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import UserInfo from './UserInfo';
import LocationInfo from './LocationInfo';
import RequestInfo from './RequestInfo';
import '../style/mystyle.css';


class Home extends Component {
    render() {
        return (
            <div>
                <HomeInfo/>
                <div className="need-space"></div>
                <UserInfo/>
                <div className="container is-fluid">
                    <div className="need-space"></div>
                    <div className="tile is-ancestor">
                        <LocationInfo/>
                        <RequestInfo/>
                    </div>
                    <div className="need-space"></div>
                </div>
            </div>
        );
    }
}

export default Home;