import React from "react";
import { Link } from "react-router-dom";

export function NavItem(props) {	
	function clickMenu() {
		if(props.link === 'Н.Тагил') {
			document.location.href = '/'
		}
		if(props.link === 'Парк') {
			scrollBlock('.attractions')		
		}
		if(props.link === 'Кафе') {
			scrollBlock('.cafe')
		}
		if(props.link === 'День рождения') {
			redirectPage('order')		
		}
		if(props.link === 'Мероприятия') {
			debugger
			<Link to="/order" />		
		}
	}

	function scrollBlock(selector) {
		document.querySelector(selector).scrollIntoView({block: "start", behavior: "smooth"})
	}

	function redirectPage(path) {
		document.location.href = `https://megalandpark.web.app/${path}.html`
	}

	return(<>
		<li className="menu__item" onClick={clickMenu}>
			<a>{props.link}</a>
		</li>
	</>)
}

