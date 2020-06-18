import React, { Component } from 'react';
import "./App.css";
import Text from './Text';

class App extends Component {

  state = {
    active: false
  }


  render() {


    return (
      <div className="app">
        <h1>Witaj nastronie</h1>
        <Text />
      </div>
    );
  }
}

export default App;
