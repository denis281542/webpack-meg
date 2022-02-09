import React from "react";

export const Btn = props => {
  return(
    <button 
      type={props.type} 
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}