import React from 'react';
import './ButtonComponent.css';

const GradientButton = ({ text }) => {
  return (
    <button className="gradient-button">
      {text}
      <div className="hover-effect">
        <div></div>
      </div>
    </button>
  );
};

export default GradientButton;