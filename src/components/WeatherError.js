import React from 'react';
import '../styles/components/WeatherError.css';

const WeatherError = () => {
  return (
    <div>
      <img className="ErrorImage" src={require('../images/sad.png')}/>
      <h2>Something went wrong, Please reload and try again.</h2>
    </div>
  );
}

export default WeatherError;
