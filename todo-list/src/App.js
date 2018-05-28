import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from "./component/TodoInput";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List Sample</h1>
        </header>
          <TodoInput
              name="todo"
          />
      </div>
    );
  }
}

export default App;
