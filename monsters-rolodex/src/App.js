import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Bartek", lastName: "Kulpa" },
      company: "CryptoTradingHub",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}! I work in{" "}
            {this.state.company}.
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "Oliwia", lastName: "Barska" },
              });
              console.log(this.state);
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
