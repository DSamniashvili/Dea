import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const Index = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <p>Lorem Ipsum</p>
    </div>
  );
};
const Products = ({ match }) => {
  return (
    <div>
      <h1>Products Page</h1>
      <p>Lorem Ipsum ...Products</p>

      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/mobiles`}>Mobile Phones</Link>
          </li>
          <li>
            <Link to={`${match.url}/laptops`}>Laptops</Link>
          </li>
          <li>
            <Link to={`${match.url}/cameras`}>Cameras</Link>
          </li>
        </ul>
      </nav>

      <Route path={`${match.url}/:category`} component={Product} />
      <Route
        path={`${match.url}/`}
        exact
        render={() => {
          return (
            <div>
              <h2>Select Product category</h2>
            </div>
          );
        }}
      />
    </div>
  );
};

//match, history, location
const Product = ({ match }) => {
  return (
    <div>
      <h2>{match.params.category}</h2>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>Lorem Ipsum</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" component={Index} exact />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
