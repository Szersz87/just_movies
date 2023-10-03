import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ src }) => {
  return <FontAwesomeIcon icon={src} />;
};


Icon.propTypes = {
  src: PropTypes.string.isRequired
};


export default Icon;
