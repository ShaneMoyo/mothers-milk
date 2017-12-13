import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../home/Home';
import Auth from '../auth/Auth';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home/> */}
        <Auth/>
      </div>
    );
  }
}

export default App;
