import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

function ButtonWithIcon({ title, className, icon, onClick, buttonContent }) {
  return (
    <button className={className} onClick={onClick}>
      <div className={buttonContent}>
      <Icon src={icon} />
      <p>{title}</p>
      </div>
    </button>
  );
}
ButtonWithIcon.propTypes = {
  title: PropTypes.string, 
  className: PropTypes.string,        
  icon: PropTypes.string.optional,  
  onClick: PropTypes.func.isRequired,
  buttonContent: PropTypes.string 
};


export default ButtonWithIcon;
