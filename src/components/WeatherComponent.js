import React, { Component } from 'react';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherImage } from './helpers/weatherImage';
import '../styles/components/WeatherComponent.css';
import _ from 'underscore'
class WeatherComponent extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation()
  }

  description(mainItem) {
    const description = mainItem.weather[0].description
    const formatDescription = description.charAt(0).toUpperCase();
    return formatDescription + description.slice(1);
  }

  temperature(mainItem) {
    return mainItem.main.temp.toFixed(1)
  }

  humidity(mainItem) {
    return mainItem.main.humidity
  }

  getMainItem () {
    const getItems = this.props.weatherData.list.slice(0, 4)
    const mainWeather = _.first(getItems)
    return mainWeather
  }

  getOtherItems() {
    const getOtherItems = this.props.weatherData.list.slice(0, 4)
    return getOtherItems
  }

  renderItems(otherItems) {
    // const weatherClass = weatherImage(this.props.weatherData.cod.toString())

    return _.map(otherItems, (name, id) => {
      // const = weatherImage(name.cod.toString())
      console.log(name, id, 'test')
      return (
        <div>
        <img className="Icon" src={weatherImage(name.weather[0].id.toString()).image}/>
        <div className="Details">
          <p>{this.temperature(name) + ' Celsius'}</p>
          <p>{this.humidity(name) + ' % Humidity'}</p>
          <p>{name.dt_txt}</p>
        </div>
        </div>

      )
    });
  }

  loading() {

    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <div className="Loading">
          <img src={require('../images/cloud-large.png')}/>
          <h2>Please wait while we get your weather!"</h2>

        </div>
      )
    } else if(this.props.loadedWeather){
      const weatherClass = weatherImage(this.props.weatherData.cod.toString())
      const mainItem = this.getMainItem()
      const otherItems = this.getOtherItems()
      return (
        <div clasName="Test">
          <div className={weatherClass.name}>
            <h2 className="City">{this.props.city}</h2>
            <div className="Description">{this.description(mainItem)}</div>
            <img className="Icon" src={weatherImage(this.props.weatherData.cod.toString()).image}/>
            <div className="Details">
            <p>{this.temperature(mainItem) + ' Celsius'}</p>
            <p>{this.humidity(mainItem) + ' % Humidity'}</p>
          </div>
          </div>
          {this.renderItems(otherItems)}




        </div>
      )
    }
  }


  render() {
    return (
      <div className="WeatherComponent">
        {this.loading()}
      </div>
    );
  }
}


export const mapStateToProps = (state) => {
  return {
    loadedWeather: state.weather.loadedWeather,
    loadingWeather: state.weather.loadingWeather,
    loadingLocation: state.location.loadingLocation,
    locationData: state.location.locationData,
    weatherData: state.weather.weatherData,
    city: state.location.city
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
