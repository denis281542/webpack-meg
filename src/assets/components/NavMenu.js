import React, { useState } from "react";
import { ListMenu } from './ListMenu'
import { BtnNav } from './BtnNav'
import { logoHeader } from '../images/img-prod/img'

export const NavMenu = () => {

  let linksLeft = [
    {link: 'Н.Тагил', active: false},
    {link: 'Парк', active: false},
    {link: 'Кафе', active: false},
    {link: 'День рождения', active: false},
    {link: 'Мероприятия', active: false}
  ]
  
  let linksRight = [
    {link: 'Акции', active: false},
    {link: 'Цены', active: false},
    {link: 'Контакты', active: false}
  ] 

  let links = [
    {id: 1, link: 'Акции', isActive: false},
    {id: 2, link: 'Цены', isActive: false},
    {id: 3, link: 'Контакты', isActive: false},
  ]

  function toggleMenu() {
    links.map(link => {
      link.isActive = !link.isActive
      console.log(link);
    })
  }

	return(<>
		<div className="header__menu-bg">
			<header className='header'>
				<nav className="menu">
					<ListMenu links={linksLeft} className='menu__left' />	
					{/* <ListMenu links={linksLeft} className='menu__left' />	 */}
					<ListMenu links={linksRight} className='menu__right' />	
					<a href="/">
						<img src={logoHeader} alt={"logo"} />
					</a>
					<a className="menu__btn">Заказать праздник</a>
					<BtnNav onMenu={toggleMenu} />
				</nav>
			</header>
		</div>
	</>)
}

