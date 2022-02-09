import React from "react";

export const Button = (props) => {
  return(<>
    <a className={props.className} href={props.href}>{props.innerText}</a>
  </>)
}