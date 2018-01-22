import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../components/WeatherItem';
import WeatherError from '../components/WeatherError';
import { weatherImage } from './helpers/weatherImage';
import {
  formatWeatherDescription,
  formatTemperature,
  formatHumidity,
  getMainWeather,
  getUpcomingWeather,
  timeText
} from './helpers/formatWeatherData';
import '../styles/containers/Weather.css';

class Weather extends Component {

  renderItem(type, details, id) {
    const { city } = this.props;
    return (
      <div className="Item">
        <WeatherItem
          type={type}
          id={id}
          city={city}
          description={formatWeatherDescription(details)}
          temperature={formatTemperature(details)}
          humidity={formatHumidity(details)}
          time={timeText(id)}
          image={weatherImage(details.weather[0].id.toString()).image}
        />
      </div>
    );
  }

  renderItems(otherItems) {
    return _.map(otherItems, (details, id) => {
      return this.renderItem("small", details, id)
    });
  }

  renderError() {
    return ( <WeatherError /> );
  }

  renderWeather() {
    const { forecast } = this.props;
    const details = getMainWeather(forecast);
    const weatherClass = weatherImage(details.weather[0].id.toString());
    const upcomingItems = getUpcomingWeather(forecast);

    return (
      <div className={weatherClass.name}>
        {this.renderItem("large", details, null)}
        <h2 className="UpcomingText">Coming up...</h2>
        <div className="UpcomingWrapper">
        {this.renderItems(upcomingItems)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Weather">
        {this.props.fetchState === 'FAILED' ? this.renderError() : this.renderWeather()}
     </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { weather, location, city } = state
  return {
    forecast: weather.weatherData.list,
    city: city.name,
    weatherFetchState: weather.weatherFetchState
  }
}

export default connect(mapStateToProps)(Weather);
