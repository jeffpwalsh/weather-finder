import React, { Component } from "react";
import App from "../App";

class Weather extends Component {
  render() {
    return (
      // PROPS PASSED - App.js
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col">
              {this.props.city && (
                <div>
                  <h5>City</h5>
                  <p>{this.props.city}</p>
                </div>
              )}
            </div>
            <div className="col">
              {this.props.country && (
                <div>
                  <h5>Country</h5>
                  <p>{this.props.country}</p>
                </div>
              )}
            </div>
            <div className="col">
              {this.props.temperature && (
                <div>
                  <h5>Temperature</h5>
                  <p>{this.props.temperature} °C</p>
                </div>
              )}
            </div>
            <div className="col">
              {this.props.humidity && (
                <div>
                  <h5>Humidity</h5>
                  <p>{this.props.humidity} %</p>
                </div>
              )}
            </div>
            <div className="col">
              {this.props.description && (
                <div>
                  <h5>Description</h5>
                  <p>{this.props.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {this.props.error && (
          <div className="card-body" className="error">
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
