import React from "react";
import Icon from "./Icon";

function Button({ title, className, icon }) {
  return (
    <button className={className}>
      <Icon src={icon} />
      <p>{title}</p>
    </button>
  );
}

export default Button;
