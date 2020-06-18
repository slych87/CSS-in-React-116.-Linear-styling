import React, { Component } from 'react';

class App extends Component {

  state = {
    active: false
  }

  render() {
    return (
      <div>
        <button style={{ border: '4px solid red', padding: 20 }} onClick={() => this.setState({ active: !this.state.active })}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
      </div>
    );
  }
}

export default App;
