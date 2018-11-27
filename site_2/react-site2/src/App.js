import React, { Component } from 'react';
import Header from './components/Header'
import SectionTwo from './components/SectionTwo'
import './App.css';
import SectionThree from './components/SectionThree';



class App extends Component {
  render() {
    return (
      <div className="all">
        <div className="wrapper">
          <Header />
          <SectionTwo />
          <SectionThree />
        </div>  
      </div>
    );
  }
}

export default App;
