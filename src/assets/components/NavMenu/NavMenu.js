import React, { useState } from "react";
import '../../components/NavMenu/nav.css'
import { ListMenu } from './ListMenu'
import { BtnNav } from './BtnNav'
import { logoHeader } from '../../images/img-prod/img'
import { Link } from "react-router-dom";

export const NavMenu = () => {

  const [isActive, setActive] = useState('false')  

  const [linksLeft, setActiveLinksLeft] = useState([
    {id: 1, link: 'Н.Тагил', isActive: false},
    {id: 2, link: 'Парк', isActive: false},
    {id: 3, link: 'Кафе', isActive: false},
    {id: 4, link: 'День рождения', isActive: false, href: '/order'},
    {id: 5, link: 'Мероприятия', isActive: false, href: '/group'}
  ]) 
  const [linksRight, setActivelinksRight] = useState([
    {id: 6, link: 'Акции', isActive: false},
    {id: 7, link: 'Цены', isActive: false},
    {id: 8, link: 'Контакты', isActive: false},
  ])  

  const toggleMenu = () => {
    setActive(!isActive)  

    setActivelinksRight(
      linksRight.map(link => {
        link.isActive = !link.isActive
        return link
      })
    )

    setActiveLinksLeft(
      linksLeft.map(link => {
        link.isActive = !link.isActive
        return link
      })
    ) 
  }

  function clickLink(e) {
    isActive ? null : toggleMenu()

    let currentLinkLeft = linksLeft.find(link => link.id === e.id),
    currentLinkRight = linksRight.find(link => link.id === e.id)
    
    if(currentLinkLeft) {
      if(currentLinkLeft.id === 1) {
        document.location.href = '/'
      }
      if(currentLinkLeft.id === 2) {
        scrollToBlock('.attractions')
      } 
      if(currentLinkLeft.id === 3) {
        scrollToBlock('.cafe')
      } 
      // if(currentLinkLeft.id === 4) {
      //   redirectPage('order')
      // } 
      return
    }
    
    if(currentLinkRight.id === 6) {
      scrollToBlock('.items')
    }
    if(currentLinkRight.id === 7) {
      console.log('Цены');
    }
    if(currentLinkRight.id === 8) {
      scrollToBlock('.contacts-description')
    }
  }

  function scrollToBlock(selector) {
		document.querySelector(selector)
      .scrollIntoView({block: "start", behavior: "smooth"})
	}

  function redirectPage(path) {
		document.location.href = `https://megalandpark.web.app/${path}.html`
	}

	return(<>
		<div className="header__menu-bg">
			<header className={ isActive 
                            ? 'header' 
                            : 'header header--active'}>
				<nav className="menu">

					<ListMenu 
            clickMenu={clickLink} 
            links={linksLeft} 
            className={isActive 
                        ? 'menu__left' 
                        : 'menu__left menu__left--active'} 
          />	

					<ListMenu 
            clickMenu={clickLink} 
            links={linksRight} 
            className={isActive 
                        ? 'menu__right' 
                        : 'menu__right menu__right--active'} 
          />	

					<Link to="/">
						<img src={logoHeader} alt="Мегалэдн Логотип" />
					</Link>

					<a className="menu__btn">Заказать праздник</a>
					<BtnNav 
            className={isActive 
                        ? 'menu__toggle' 
                        : 'menu__toggle menu__toggle--active'} 
            onMenu={toggleMenu} 
          />
				</nav>
			</header>
		</div>
	</>)
}

