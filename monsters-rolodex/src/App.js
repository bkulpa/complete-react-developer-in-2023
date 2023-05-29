import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Bartek",
          id: "31fafad311",
        },
        {
          name: "Norbert",
          id: "31fafad31",
        },
        {
          name: "Michał",
          id: "31fafad323",
        },
        {
          name: "Eryk",
          id: "31fafad3423",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
