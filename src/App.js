import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch(process.env.EXPRESS_API_URL + "/vehicles")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err)
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to React123</h1>
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App;