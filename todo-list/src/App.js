import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from "./component/InputBox";

class App extends Component {

    state = {
        list : [
            {
                index : '',
                todo : ''
            }
        ]
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List Sample</h1>
        </header>
          <InputBox
              name="todo"
              insertData={this.state.list}
          />
      </div>
    );
  }
}

export default App;
