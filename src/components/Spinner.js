import React from 'react';
import '../styles/components/spinner.css';

const Spinner = () => {
  return (
    <div>
      <div className="spinner">
        <img src={require('../images/cloud.png')} alt={"spinner"} />
      </div>
      <h2 className="spinner-text">Loading...</h2>
    </div>
  );
}

export default Spinner;
