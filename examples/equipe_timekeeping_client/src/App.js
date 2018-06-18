import React, { Component } from 'react';
import Timekeeping from './Timekeeping.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Timekeeping url="ws://127.0.0.1:21000"/>
      </div>
    );
  }
}

export default App;
