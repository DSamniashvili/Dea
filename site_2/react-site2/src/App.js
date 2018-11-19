import React, { Component } from 'react';
import Header from './components/Header'
import SectionTwo from './components/SectionTwo'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="all">
        <div className="wrapper">
          <Header />
          <SectionTwo />
        </div>  
      </div>
    );
  }
}

export default App;
