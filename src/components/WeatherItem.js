import React, { Component } from 'react';
import '../styles/components/WeatherItem.css';

export function showCity(type, city, description) {
  if(type === "large") {
    return (
      <div>
        <h1 className="City">{city}</h1>
        <div className="Description">{description}</div>
      </div>
    );
  }
}

export function showTime(time, type) {
  if(type ==="small") {
    return (
      <p>{"+ " + time + " Hours"}</p>
    );
  }
}

const WeatherItem = (props) => {
  const { image, time, temperature, humidity, type, city, description } = props;
  return (
    <div>
      {showCity(type, city, description)}
      <img className="Icon" src={image}/>
      <div>
        {showTime(time, type)}
        <p>{temperature + " Celsius"}</p>
        <p>{humidity + " % Humidity"}</p>
      </div>
    </div>
  );
}

export default WeatherItem;
