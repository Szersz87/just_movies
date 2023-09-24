import React from "react";
import Icon from "./Icon";

function Button({ title, className, icon, onClick }) {
  function handleClick() {};
  return (
    <button className={className} onClick={onClick}>
      <Icon src={icon} />
      <p>{title}</p>
    </button>
  );
}

export default Button;
