import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

function Button({ title, className, icon, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <Icon src={icon} />
      <p>{title}</p>
    </button>
  );
}
Button.propTypes = {
  title: PropTypes.string.isRequired, 
  className: PropTypes.string,        
  icon: PropTypes.string.isRequired,  
  onClick: PropTypes.func.isRequired  
};


export default Button;
