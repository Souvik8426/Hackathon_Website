import React from 'react';
import './HeaderButton.css';

const HeaderButton = () => {
  const handleClick = () => {
    alert('Registrations will open soon!!!');
  };

  return (
    <button className="header-button" onClick={handleClick}>
      Register
    </button>
  );
};

export default HeaderButton;
