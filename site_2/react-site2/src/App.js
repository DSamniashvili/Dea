import React, { Component } from 'react';
// import image from '../public/imgs/portfolio.jpg'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="all">
        <div className="wrapper">
          <Header />
        </div>  
      </div>
    );
  }
}

export default App;
