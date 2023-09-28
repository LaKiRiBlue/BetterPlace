import React from 'react';
import './AnimatedIcons.css';
import pineappleIcon from './pineapple-icon.png';
import bananaIcon from './banana-icon.png';
import carrotIcon from './carrot-icon.png';

const AnimatedIcons = () => {
  return (
    <div className="animated-icons">
      {/* Pineapple Icon */}
      <img
        src={pineappleIcon}
        alt="Pineapple"
        className="icon pineapple"
      />

      {/* Banana Icon */}
      <img
        src={bananaIcon}
        alt="Banana"
        className="icon banana"
      />

      {/* Carrot Icon */}
      <img
        src={carrotIcon}
        alt="Carrot"
        className="icon carrot"
      />
    </div>
  );
};

export default AnimatedIcons;
