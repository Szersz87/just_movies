import React from "react";

const Logo = ({ imageSrc, onClick }) => {
  return (
    <img onClick={onClick} src={imageSrc} alt="Logo" />
  );
};

export default Logo;
