import React from "react";
import PropTypes from "prop-types";

const Logo = ({ imageSrc}) => {
  return <img src={imageSrc} alt="Logo" />;
};

Logo.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default Logo;