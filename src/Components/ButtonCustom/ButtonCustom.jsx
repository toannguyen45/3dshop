import React from 'react';
import './ButtonCustom.scss'

const ButtonCustom = ({ title, onClick, type = 'button' }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default ButtonCustom;