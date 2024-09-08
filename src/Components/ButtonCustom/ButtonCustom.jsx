import React from 'react';
import './ButtonCustom.scss'

const ButtonCustom = ({ title, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonCustom;