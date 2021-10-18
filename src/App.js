import React, { Component } from "react";
import "./App.css";
import config from "./config.js"
const url = config.EXPRESS_API_URL

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch(url + "vehicles")
    .then(res => res.json())
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
        {this.state.apiResponse.length > 0 ? this.state.apiResponse.map(home => <div>{home.make}</div>) : ""}
      </div>
    )
  }
}

export default App;