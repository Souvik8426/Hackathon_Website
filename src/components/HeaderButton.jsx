import React from 'react';
import './HeaderButton.css';

const HeaderButton = () => {
  const handleClick = () => {
    window.open('https://forms.gle/r47aXrnQnHYicwRe6', '_blank');
  };

  return (
    <button className="header-button" onClick={handleClick}>
      Register
    </button>
  );
};

export default HeaderButton;
