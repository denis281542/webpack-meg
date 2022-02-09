import React from "react";
import { Link } from "react-router-dom";

export function NavItem({link, id, onClick}) {	

  let className = ['menu__item']

  if(link.isActive) {
    className.push('menu__item menu__item--active')
  }
  
  let liStyle = {
    transitionDelay: id * .2 + 's',
  }

  if(!link.isActive) {
    liStyle.transitionDelay = '0s'
  }
  
	return(<>
		<li 
      style={liStyle} 
      className={className.join(' ')} 
      onClick={() =>onClick(link)}
    >
			<Link to={link.href || ''}>{link.link}</Link>
		</li>
	</>)
}

