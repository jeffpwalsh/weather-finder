import React, { Component } from "react";
//APP CLASS COMPONENTS
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

//API KEY FROM WEATHER API SITE IN ENV & GITIGNORE

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//INITIAL STATE SET
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  //FUNCTION CALL TO RESET PAGE
  handleReset = () => {
    window.location.reload();
  };

  //FUNCTION CALL - MAIN, ASYNC, FETCH, CONDITIONAL & SETSTATE
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.city.value;
    // const country = e.target.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json();
    if (city) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter a City and Country"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Titles />
        {/* PROPS PASSED IN */}
        <Form getWeather={this.getWeather} handleReset={this.handleReset} />
        {/* PROPS PASSED IN */}
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
