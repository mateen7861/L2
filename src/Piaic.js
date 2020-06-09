import React, { Component } from "react";

class Piaic extends Component {
  state = {
    name: "mateen",
  };

  render() {
    return (
      <div>
        <h1>Hi {this.state.name}</h1>
      </div>
    );
  }
}
export default Piaic;
