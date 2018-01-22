import React, { Component } from 'react';
import '../styles/components/WeatherComponent.css';

  export function showCity(type, city, description) {

    if(type === "large") {
      return (
        <div>
        <h1 className="City">{city}</h1>
        <div className="Description">{description}</div>
      </div>
      )
    }
  }

  export function showTime(time, type) {
    if(type ==="small") {
      return (
        <p>{"+ " + time + " Hours"}</p>

      )
    }
  }


const WeatherItem = ({image, time, temperature, humidity, type, city, description}) => {
  return (
      <div>
        {showCity(type, city, description)}
        <img className="Icon" src={image}/>
        <div className="Details">
          {showTime(time, type)}
        <p>{temperature + " Celsius"}</p>
        <p>{humidity + " % Humidity"}</p>
      </div>
    </div>
  )

}

export default WeatherItem
