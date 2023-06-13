import { Component } from "react";
import "./card-container.styles.css";

class CardContainer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img
          alt={`monster ${this.props.name}`}
          src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
        />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default CardContainer;
