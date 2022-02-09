import React, {useState} from "react";

// let isActive = false

export function BtnNav(props) {
  
  return (<>
    <div className="toggle__wrapper" onClick={props.onMenu}>
      <button className={props.className}>Меню</button>
    </div>
  </>)  
}