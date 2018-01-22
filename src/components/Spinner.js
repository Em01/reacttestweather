import React from 'react'
import '../styles/components/WeatherComponent.css';

const Spinner = () => {

  return (
    <div className="Loading">
      <img src={require('../images/cloud-large.png')}/>
      <h2>Loading...</h2>
    </div>
  )

}

export default Spinner
