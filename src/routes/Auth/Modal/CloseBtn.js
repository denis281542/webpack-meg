import React from "react";

export const CloseBtn = (props) => {
  return(
    <button 
      onClick={props.onClick}
      className={props.className}
    >
      <i className={props.icon}></i>
    </button>
  )
}