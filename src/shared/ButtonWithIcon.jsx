import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

function ButtonWithIcon({ title, className, icon, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <Icon src={icon} />
      <p>{title}</p>
    </button>
  );
}
ButtonWithIcon.propTypes = {
  title: PropTypes.string, 
  className: PropTypes.string,        
  icon: PropTypes.string.optional,  
  onClick: PropTypes.func.isRequired  
};


export default ButtonWithIcon;
