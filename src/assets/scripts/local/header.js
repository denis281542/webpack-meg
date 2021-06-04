class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .header {
          background-color: #00b3e4;
          position: fixed;
          z-index: 2;
          width: 100%;
        }
        .header__menu-bg {
          background-color: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .header__menu-bg--active {
          position: fixed;
        }
        
        .menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          font-size: 14px;
          font-weight: 600;
          max-width: 1350px;
          padding: 15px 40px;
          margin: 0 auto;
        }
        .menu__left, .menu__right {
          display: flex;
          justify-content: space-between;
        }
        .menu__left li, .menu__right li {
          list-style: none;
        }
        .menu__left {
          order: 0;
          width: 498px;
        }
        .menu__right {
          order: 2;
          width: 222px;
        }
        .menu a {
          text-decoration: none;
        }
        .menu__btn {
          order: 3;
          color: #fff;
          cursor: pointer;
          transition: 0.5s;
        }
        .menu a:hover {
          opacity: 0.8;
        }
        .menu img {
          width: 200px;
          height: auto;
          order: 1;
          margin: 0 25px;
          cursor: pointer;
        }
        .menu__btn {
          border: 2px solid #e5fffe;
          border-radius: 20px;
          padding: 8px 30px 9px;
          font-weight: 700;
          margin-left: 10px;
        }
        .menu__toggle {
          display: none;
        }

        @media (max-width: 1270px) {
          .menu {
            justify-content: center;
          }
          .menu__left {
            order: 1;
          }
          .menu img {
            order: 0;
          }
          .menu__btn {
            margin-top: 10px;
            align-items: center;
          }
        }

        @media (max-width: 1200px) {
          .menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 75px;
            transition: all 1s;
            position: relative;
          }
          .menu img {
            width: 140px;
            margin: 0;
            position: absolute;
            top: 20px;
            left: 20px;
          }
          .menu--active {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            height: 500px;
            padding-top: 85px;
          }
          .menu__left, .menu__right {
            opacity: 0;
          }
          .menu__left--active, .menu__right--active {
            opacity: 1;
            display: block;
            margin: 0 auto;
            width: auto;
            text-align: center;
          }
          .menu__left--active li, .menu__right--active li {
            padding: 10px;
            font-size: 24px;
          }
          .menu__btn {
            display: none;
          }
          .menu__toggle {
            display: block;
            font-size: 0;
            border: none;
            content: "";
            height: 2px;
            width: 22px;
            background-color: #fff;
            position: absolute;
            right: 10px;
            top: 10px;
            margin-top: 15px;
            transition: 0.5s;
          }
          .menu__toggle::before {
            display: block;
            top: 6px;
            content: "";
            height: 2px;
            background-color: #fff;
            position: relative;
            transition: 0.5s;
          }
          .menu__toggle::after {
            display: block;
            top: -8px;
            content: "";
            height: 2px;
            background-color: #fff;
            position: relative;
            transition: 0.5s;
          }
          .menu__toggle--active {
            background-color: transparent;
            position: absolute;
            right: 10px;
            top: 13px;
          }
          .menu__toggle--active::before {
            transform: rotateZ(45deg);
            top: 0;
          }
          .menu__toggle--active::after {
            transform: rotateZ(-45deg);
            top: -2px;
          }
          .menu .toggle__wrapper {
            position: fixed;
            top: 10px;
            right: 20px;
            padding: 25px;
          }        
        }
      </style>

      <div class="header__menu-bg">
        <header class="header">
          <nav class="menu">
            <ul class="menu__left">
              <li>
                <a href="">Н.Тагил</a>
              </li>
              <li>
                <a href="">Парк</a>
              </li>
              <li>
                <a href="">Кафе</a>
              </li>
              <li>
                <a href="">День рождения</a>
              </li>
              <li>
                <a href="">Мероприятия</a>
              </li>
            </ul>
            <ul class="menu__right">
              <li>
                <a href="">Акции</a>
              </li>
              <li>
                <a href="">Цены</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
            <a href="/">
              <img src="baa2b45d7c9bed4a275f.png" alt="">
            </a>
            <a type="a" class="menu__btn">Заказать праздник</a>
            <div class="toggle__wrapper">
              <button class="menu__toggle">Меню</button>
            </div>
          </nav>
        </header>
      </div>
    `;
  }
}

customElements.define('header-component', Header)

/* Menu */
let toggleBtn = document.querySelector('.menu__toggle')
let toggleWrapper = document.querySelector('.toggle__wrapper')
let menuActive = document.querySelector('.menu')
let menuLeft = document.querySelector('.menu__left')
let menuRigth = document.querySelector('.menu__right')
let menuBg = document.querySelector('.header__menu-bg')
let header = document.querySelector('.header')

function toggleActive() {
  toggleBtn.classList.toggle('menu__toggle--active')
  menuActive.classList.toggle('menu--active')
  menuBg.classList.toggle('header__menu-bg--active')

  if(!menuLeft.classList.contains('menu__left--active') &&
  !menuRigth.classList.contains('menu__right--active')) {
  setTimeout(function() {
      menuLeft.classList.add('menu__left--active')
      menuRigth.classList.add('menu__right--active')
    }, 1000)
  } else {
    menuLeft.classList.remove('menu__left--active')
    menuRigth.classList.remove('menu__right--active')
  }
}

function closeMenu(e) {
  if(e.target.classList.contains('header__menu-bg--active')) {
    !toggleActive()
  }
}

toggleWrapper.addEventListener('click', toggleActive)
menuBg.addEventListener('click', closeMenu)


