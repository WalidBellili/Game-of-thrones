import React, { Component } from "react";

class Continents extends Component {
  render() {
    return (
      <div className="toggleContinent" id="toggle2">
        <p>{this.props.continent}</p>
      </div>
    );
  }
}

export default Continents;
