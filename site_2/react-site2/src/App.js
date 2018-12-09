import React, { Component } from "react";
import Header from "./components/Header";
import SectionTwo from "./components/SectionTwo";
import "./App.css";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import FooterPart from "./components/FooterPart";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = ({ match }) => {
  return (
    <>
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <FooterPart />
    </>
  );
};

const productsPage = ({ match }) => {
  return (
    <>
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <FooterPart />
    </>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="all">
            <div className="wrapper" >


              <Route path="/" component={HomePage} exact />
              <Route path="/products" component={productsPage} />

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
