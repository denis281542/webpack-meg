import React, {useState} from "react";

// let isActive = false

export function BtnNav(props) {
  // const [className, setState] = useState(['menu__toggle']);
  
  // function onMenu() {
  //   isActive = !isActive
  //   console.log(isActive);
  //   className.push('menu__toggle--active')
  //   setState(className.join(' '))
  // }

  return (<>
    <div className="toggle__wrapper">
      <button className='menu__toggle' onClick={props.onMenu}>Меню</button>
      {/* <button className={className} onClick={props.onMenu}>Меню</button> */}
    </div>
  </>)  
}