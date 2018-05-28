import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from "./component/InputBox";

class App extends Component {
<<<<<<< HEAD
=======

    state = {
        list : [
            {
                index : '',
                todo : ''
            }
        ]
    }


>>>>>>> parent of 3c70d46... naming 변경
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
<<<<<<< HEAD
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <InputBox/>
=======
          <InputBox
              name="todo"
              insertData={this.state.list}
          />
>>>>>>> parent of 3c70d46... naming 변경
      </div>
    );
  }
}

export default App;
