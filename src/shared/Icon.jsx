import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ src, className }) => {
  return <FontAwesomeIcon icon={src} className={className} />;
};


Icon.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};


export default Icon;
