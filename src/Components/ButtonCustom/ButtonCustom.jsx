import React from 'react';
import { Button } from 'antd';
import './ButtonCustom.scss';

const ButtonCustom = ({ title, onClick, type = 'button', disabled = false, loading = false, htmlType = 'button', ...rest }) => {
  return (
    <Button
      className="custom-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
      loading={loading}
      htmlType={htmlType}
      {...rest} // Spread additional props to Button
    >
      {title}
    </Button>
  );
};

export default ButtonCustom;
