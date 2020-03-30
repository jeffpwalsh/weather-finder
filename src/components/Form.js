import React, { Component } from "react";
import App from "../App";

class Form extends Component {
  render() {
    return (
      // PROPS PASSED - App.js
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="City eg: New York, Paris, Durban, Barcelona"
        />
        {/* <input type="text" name="country" placeholder="Country eg:US, UK, FR, ZA" /> */}
        <button>Get Weather</button>
        <button onClick={this.props.handleReset}>Reset</button>
      </form>
    );
  }
}

export default Form;
