import React, { Component } from 'react';
import UserInput from './Components/userInput';
import UserOutput from './Components/userOutput';
import './App.css';

class App extends Component {
  state = {
    userName: "rafael"
  }

  nameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    const style ={
      color: 'blue',
      margin: '50px',
    };
    return (
      <div className="App">
        <h1 style={style} >React 16 Section 3 Assignment</h1>
        <UserInput 
          change = {this.nameChangedHandler}
          currentName= {this.state.userName}
        />
        <UserOutput userName = {this.state.userName} />
        <UserOutput userName = {this.state.userName} />
        <UserOutput userName = "testName" />
      </div>
    );
  }
}

export default App;
