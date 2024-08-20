// HeaderButton.jsx
import React from 'react';
import { useEffect } from 'react';
import './HeaderButton.css';

const HeaderButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div
      className="apply-button"
      data-hackathon-slug="datathon2k24"
      data-button-theme="light"
      // style="height: 44px; width: 312px"
    ></div>
  );
};

export default HeaderButton;
