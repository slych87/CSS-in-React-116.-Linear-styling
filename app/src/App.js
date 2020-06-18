import React, { Component } from 'react';

class App extends Component {

  state = {
    active: false
  }


  render() {

    // const btn_off = {
    //   border: '2px solid black',
    //   padding: "10px 20px",
    //   fontFamily: 'arial',
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: 'white',
    // }

    // const btn_on = {
    //   border: '2px solid black',
    //   padding: "10px 20px",
    //   fontFamily: 'arial',
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: 'cadetblue',
    //   color: 'white',
    // }

    const styles = {
      btn_off: {
        border: '2px solid black',
        padding: "10px 20px",
        fontFamily: 'arial',
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        backgroundColor: 'white',
      },

      btn_on: {
        border: '2px solid black',
        padding: "10px 20px",
        fontFamily: 'arial',
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        backgroundColor: 'cadetblue',
        color: 'white',
      }
    }

    return (
      <div>
        <button style={this.state.active ? styles.btn_on : styles.btn_off} onClick={() => this.setState({ active: !this.state.active })}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
      </div>
    );
  }
}

export default App;
