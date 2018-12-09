import React, { Component } from 'react';
import Users from './components/Users'


let url = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch(url)
      .then( data => data.json() )
      .then( data => this.setState( { data } ) )
      .catch( err => console.log(err.message) )
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        { this.state.data && <Users Length={5} data={this.state.data} />}
      </div>
    );
  }
}

export default App;
