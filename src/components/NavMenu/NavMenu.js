import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../components/NavMenu/nav.css'
import { ListMenu } from './ListMenu'
import { BtnNav } from './BtnNav'
import { ModalWindow } from '../Modal/ModalWindow'
import { ModalLogin } from '../../routes/Auth/Modal/ModalLogin'
import { logoHeader } from '../../assets/images/img-prod/img'
import { Link } from "react-router-dom";
import { Btn } from "../Modal/Btn";
import {useAuth} from '../../hooks/useAuth';
import { useDispatch } from 'react-redux'

export const NavMenu = ({onClick}) => { 
  const {isAuth} = useAuth()
  const dispatch = useDispatch()

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
  
  const navigate = useNavigate()

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

  const closeMenu = () => {
    linksRight.map(link => {
      link.isActive = false
    })

    linksLeft.map(link => {
      link.isActive = false
    })

    setActive(true) 
  }

  function clickLink(e) {
    isActive ? null : toggleMenu()

    let currentLinkLeft = linksLeft.find(link => link.id === e.id),
    currentLinkRight = linksRight.find(link => link.id === e.id)
    
    if(currentLinkLeft) {
      if(currentLinkLeft.id === 1) {
        navigate('/')
      }
      if(currentLinkLeft.id === 2) {
        scrollToBlock('.attractions')
      } 
      if(currentLinkLeft.id === 3) {
        scrollToBlock('.cafe')
      } 
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

  const goToAccount = () => {
    closeMenu()            
    navigate('/account')
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

					<Link to="/" onClick={() => closeMenu()}>
						<img src={logoHeader} alt="Мегалэдн Логотип" />
					</Link>
          
          <ModalWindow>
            <Btn 
              className="menu__btn"
              text='Заказать праздник'
            />
          </ModalWindow>

          {isAuth 
            ? <Btn 
                text={<i className="fas fa-user"></i>}
                onClick={goToAccount}
                className="login"
              />
            : <ModalLogin
                title='Войти'
                closeMenu={() => closeMenu()}
              >
                <Btn 
                    text={<i className="fas fa-sign-in-alt"></i>}
                    className="login"
                />
              </ModalLogin>
          }           
          
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

