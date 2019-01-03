import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
    this.username = React.createRef();
    this.password = React.createRef();

    this.state = {
      isLoggedIn: false
    };
  }

  OnSubmitHandler(ev) {
    ev.preventDefault();
    // alert('Submitted!');
    console.log(this.username.current.value);
    this.Login(this.username.current.value, this.password.current.value);
  }

  Login = (username, password) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(result => {
        if (result.auth) {
          localStorage.setItem("authorized", result.username);
          // this.setState({ isLoggedIn: true })
          this.props.showLogin(false);
        } else {
          localStorage.removeItem("authorized");
        }
      })
      .catch(err => console.log(err.message));
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to={"/profile"} />;
    } else {
      return (
        <form className="form form--login" onSubmit={this.OnSubmitHandler}>
          <div className="input--group">
            <div className="input--group">
              <label>
                Username:
                <input
                  type="text"
                  placeholder="enter the username"
                  ref={this.username}
                  className="form--input"
                />
              </label>
            </div>
            <div className="input--group">
              <label>
                Password:
                <input
                  type="password"
                  placeholder="enter the password"
                  ref={this.password}
                  className="form--input"
                />
              </label>
            </div>
            <div className="input--group">
              <button className="btn btn--login">Login</button>
            </div>
          </div>
        </form>
      );
    }
  }
}
