import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState(previousVale => ({
      count: previousVale.count + 1,
    }));
  }


  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.increment}>Incrementa</button>
      </div>
    );
  }
}

export default App;
