import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      count: 0
    })
  }

  onIncrement = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    })
  }

  onDecrement = () => {
    this.setState( (prev) => {
      return {
        count: prev.count - 1
      }
    })

  }

  render() {
    return (
      <div className="App">
        <button className="increment" onClick={this.onIncrement}>+ </button>
        <button className="decrement" onClick={this.onDecrement}>- </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
