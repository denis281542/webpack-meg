/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/order.css":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/order.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/style.css":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/style.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/scripts/local/footer.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/local/footer.js ***!
  \********************************************/
/***/ (() => {

class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          background-color: #1b1340;
        }
        .footer__inner {
          max-width: 960px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
          padding: 30px 20px 45px;
        }
        .footer__logo {
          max-width: 150px;
          width: 100%;
          padding-bottom: 22px;
        }
        .footer__description, .footer__feedback {
          opacity: 0.7;
          line-height: 26px;
          letter-spacing: 1px;
          color: #d6d6d6;
          font-size: 14px;
        }      
      </style>
      <footer class="footer">
        <div class="footer__inner">
          <img class="footer__logo" src="25b426fb7668dde3abef.png" alt="Логотип Мегаленд">
          <div class="footer__description">
            © Холдинг «Мегаполис», 2009 — 2020 <br>
            Условия договора публичной оферты (конфиденциальность и защита персональной информации) <br>
            Правила посещения <br>
            <a class="footer__feedback"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZeZB3l5mQOsdub03OTQLdSbJrUmEC_vcwYPqriPslgL4tg/viewform?entry.632640978=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB"
              target="_blank"
            >Оставить отзыв</a>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer)

/***/ }),

/***/ "./src/assets/scripts/local/menu-nav.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/local/menu-nav.js ***!
  \**********************************************/
/***/ (() => {

class MenuNav extends HTMLElement {
  constructor() {
    super();
  }
  

  connectedCallback() {
    let circleWidth = window.innerWidth * .22 + 'px'

    this.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        .header {
          background-color: #00b3e4;
          height: 85px;
          position: fixed;
          z-index: 2;
          width: 100%;
          transition: all 1s ease-out;
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
        .menu__left--active, .menu__right--active {
          display: block;
        }
        .menu__item {
          list-style: none;
          opacity: 1;
          width: 100%;
          text-align: center;
          padding: 1rem 0;
        }
        .menu__item--active {
          opacity: 1;
          transform: translateX(0);  
          transition: 
            opacity .4s ease-in-out, 
            transform .6s cubic-bezier(0.175, 0.885, .32, 1.2);        
        }
        .menu__item--active:nth-of-type(1) {
          transition-delay: .7s;
        }
        .menu__item--active:nth-of-type(2) {
          transition-delay: .8s;
        }
        .menu__item--active:nth-of-type(3) {
          transition-delay: .9s;
        }
        .menu__item--active:nth-of-type(4) {
          transition-delay: 1s;
        }
        .menu__item--active:nth-of-type(5) {
          transition-delay: 1.1s;
        }
        .right.menu__item--active:nth-of-type(1) {
          transition-delay: 1.2s;
        }
        .right.menu__item--active:nth-of-type(2) {
          transition-delay: 1.3s;
        }
        .right.menu__item--active:nth-of-type(3) {
          transition-delay: 1.4s;
        }
        .menu__left {
          order: 0;
          width: 485px;
        }
        .menu__right {
          order: 2;
          width: 222px;
        }
        .menu__item a {
          text-decoration: none;
          color: #fff;
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
          .menu img {
            order: 0;
          }
          .menu__btn {
            margin-top: 10px;
            align-items: center;
          }
        }

        @media (max-width: 1200px) {
          .header {
            height: 100%;
            clip-path: circle(${circleWidth} at top right);
            heigth: 100%;
          } 
          .header--active {
            clip-path: circle(730px at center);
            heigth: 100%;
            padding-top: 65px;
          }
          .menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            transition: all 1s;
            position: relative;
            font-size: 24px;
          }
          .menu img {
            width: 140px;
            margin: 0;
            position: fixed;
            top: 20px;
            left: 20px;
          }
          .menu--active {
            display: flex;
            padding-top: 85px;
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
            right: 0px;
            top: 0px;
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
            right: 0px;
            top: 3px;
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
          .menu__item {
            list-style: none;
            opacity: 0;
            transform: translateX(100%);
            width: 100%;
            text-align: center;
            padding: 1rem 0;
          }
          .menu__item--active {
            opacity: 1;
            transform: translateX(0);  
            transition: 
              opacity .4s ease-in-out, 
              transform .6s cubic-bezier(0.175, 0.885, .32, 1.2);        
          }
          .menu__item--active:nth-of-type(1) {
            transition-delay: .7s;
          }
          .menu__item--active:nth-of-type(2) {
            transition-delay: .8s;
          }
          .menu__item--active:nth-of-type(3) {
            transition-delay: .9s;
          }
          .menu__item--active:nth-of-type(4) {
            transition-delay: 1s;
          }
          .menu__item--active:nth-of-type(5) {
            transition-delay: 1.1s;
          }
          .right.menu__item--active:nth-of-type(1) {
            transition-delay: 1.2s;
          }
          .right.menu__item--active:nth-of-type(2) {
            transition-delay: 1.3s;
          }
          .right.menu__item--active:nth-of-type(3) {
            transition-delay: 1.4s;
          }
          .menu__left {
            order: 0;
            width: 100%;
          }
          .menu__right {
            order: 2;
            width: 100%;
          }        
        }
      </style>

      <div class="header__menu-bg">
        <header class="header">
          <nav class="menu">
            <ul class="menu__left">
              <li class="menu__item">
                <a href="">Н.Тагил</a>
              </li>
              <li class="menu__item">
                <a href="">Парк</a>
              </li>
              <li class="menu__item">
                <a href="">Кафе</a>
              </li>
              <li class="menu__item">
                <a href="">День рождения</a>
              </li>
              <li class="menu__item">
                <a href="">Мероприятия</a>
              </li>
            </ul>
            <ul class="menu__right">
              <li class="menu__item right">
                <a href="">Акции</a>
              </li>
              <li class="menu__item right">
                <a href="">Цены</a>
              </li>
              <li class="menu__item right">
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

customElements.define('nav-component', MenuNav)

let menuBtn = document.querySelector('.toggle__wrapper')
let header = document.querySelector('.header')
let menuLeft = document.querySelector('.menu__left')
let menuLeftLi = document.querySelectorAll('.menu__item')
let menuRigth = document.querySelector('.menu__right')
let toggleBtn = document.querySelector('.menu__toggle')

function openMenu() {
  header.classList.toggle('header--active')
  menuLeft.classList.toggle('menu__left--active')
  menuRigth.classList.toggle('menu__right--active')
  toggleBtn.classList.toggle('menu__toggle--active')
  menuLeftLi.forEach(elem => {
    elem.classList.toggle('menu__item--active')
  })
}

menuBtn.addEventListener('click', openMenu)


/***/ }),

/***/ "./src/assets/scripts/local/modal-window.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/local/modal-window.js ***!
  \**************************************************/
/***/ (() => {

class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .modal {
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        .modal__wrapper {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 999;
          display: none;
        }
        .modal__form {
          max-width: 70vw;
          width: 100%;
          max-height: 95vh;
          height: 100%;
          margin: 0 auto;
          display: flex;
          background-color: #f8fafc;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .modal__field {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          max-width: 400px;
          width: 100%;
        }
        .modal__field:nth-child(4) {
          margin-bottom: 0;
        }
        .modal__field label {
          margin-bottom: 8px;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.6;
          color: #212529;
          text-align: left;
        }
        .modal__field input {
          padding: 6px 16px;
          cursor: text;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.6;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        input[type=date] {
          -webkit-appearance: none;
          max-width: 400px;
          width: auto;
        }
        .modal__buttons {
          align-self: flex-end;
          margin-top: 46px;
        }
        .modal__btn {
          color: #fff;
          border: none;
          font-size: 14px;
          line-height: 1.6;
          border-radius: 4px;
          padding: 6px 12px;
        }
        .modal .next-btn {
          background-color: #3490dc;
          margin-left: 10px;
          cursor: pointer;
          position: relative;
        }
        .modal .prev-btn {
          background-color: #6c757d;
          opacity: 0.65;
          cursor: pointer;
          position: relative;
        }
        .modal__btn-close {
          border: none;
          position: absolute;
          z-index: 9999;
          right: -10px;
          top: -10px;
          background-color: transparent;
          cursor: pointer;
        }
        .modal__btn-close i {
          color: #fff;
          font-size: 32px;
          line-height: 0.8;
          background-color: #ff0073;
        }        
        .form {
          max-width: 400px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }        
        @media (max-width: 640px) {
          .modal__form {
            height: auto;
          }
          .form {
            padding: 20px;
          }
          input[type=date] {
            -webkit-appearance: none;
            max-width: 400px;
            width: 100%;
        }
        @media (max-width: 480px) {
          .modal__form {
            max-width: 85vw;
            max-height: 80vh;
          }        
          .form {
            max-width: 288px;
          }
        }
      </style>
      <div class="modal__wrapper">
        <div class="modal">
          <div class="modal__form">
            <form class="form">
              <div class="modal__field">
                <label for="date">Дата проведения праздника</label>
                <input 
                  id="date" 
                  type="date"
                >
              </div>
              <div class="modal__field">
                <label for="name">ФИО</label>
                <input id="name" type="text" placeholder="Иванов Иван Иванович">
              </div>
              <div class="modal__field">
                <label for="phone">Мобильный телефон</label>
                <input id="phone" type="tel" placeholder="89991234567">
              </div>
              <div class="modal__field">
                <label for="email">E-mail</label>
                <input id="email" type="email" placeholder="email@emial.ru">
              </div>
              <div class="modal__buttons">
                <button class="modal__btn prev-btn">Назад</button>
                <button class="modal__btn next-btn">Далее</button>
              </div>
            </form>
          
            <button id="close-modal-btn" class="modal__btn-close">
              <i class="far fa-window-close"></i>
            </button>
          </div>
          
        </div>
      </div>
    `
  }
}

customElements.define('modal-component', Modal)

/* Open modal */
let navLink = document.querySelector('.menu__btn')

navLink.addEventListener('click', (e) => {
  e.preventDefault()
  modalWindow.style.display = 'block'
})

/* Close modal window */
let closeModalBtn = document.getElementById('close-modal-btn')
let modalWindow = document.querySelector('.modal__wrapper')
closeModalBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none'
})

function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'
}

document.addEventListener('click', e => {
  if(e.target.classList.contains('modal')) {
    modalWindow.style.display = 'none'
  }
})

/* Current date */
document.getElementById('date').valueAsDate = new Date()


/***/ }),

/***/ "./src/assets/scripts/local/order.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/local/order.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.css */ "./src/assets/scripts/local/order.css");
/* Show item btn */
let showBtn = document.getElementById('show-btn')
let cardHidden = document.querySelector('.card__wrapper')

function showItem() {
  this.style.display = 'none'
  cardHidden.classList.remove('card--hidden')
}

showBtn.addEventListener('click', showItem)

// /* Current date */
// let date = new Date()
// let dateInput = document.getElementById('date');

// function formatDate(date) {
//   let dd = date.getDate()
//   if (dd < 10) dd = '0' + dd

//   let MM = date.getMonth() + 1
//   if (MM < 10) MM = '0' + MM

//   let yyyy = date.getFullYear()
//   if (yyyy < 10) yyyy = '0' + yyyy

//   return yyyy + '-' + MM + '-' + dd
// }

// let currentDate = formatDate(date)
// dateInput.value = currentDate

;

/* Open modal */
let offersList = document.querySelector('.offers__list')
let phoneSection = document.querySelectorAll('.phone')
let navLink = document.querySelector('.menu__btn')
let modalWindow = document.querySelector('.modal__wrapper')


function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'
}

offersList.addEventListener('click', openModal)
navLink.addEventListener('click', e => {
  modalWindow.style.display = 'block'
})

phoneSection.forEach(el => {
  el.addEventListener('click', openModal)
})

/***/ }),

/***/ "./src/assets/scripts/local/touch-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/local/touch-slider.js ***!
  \**************************************************/
/***/ (() => {

class Slider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        * {
        margin: 0;
        padding: 0;
        }
        .slider-container {
          margin: 2rem auto;
        }
        .dragstart a { 
          pointer-events: none;
        }
        .slider-window-width {
          overflow: hidden;
        }
        .attractions-list {
          display: inline-flex;
          transform: translateX(0);
          transition: transform .1s;
          cursor: grab;
        }
        .attractions-item {
          list-style: none;
          text-align: center;
          user-select: none;
        }
        .attractions-item img {
          transition: transform .1s ease-in-out;
          width: 100%;
          height: 100%;
          cursor: grabbing;
          border-radius: 15px;
          box-shadow: 0 0 0 1px #e0dfde;
          box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)
        }
        // .dragstart {
        //   pointer-events: none;
        // }
        .attractions-link {
          color: #444444;
          text-decoration: none;
        }
        .attractions-description {
          font-weight: 700;
          line-height: 1.35;
        }
        .grabbing {
          cursor: grabbing;
        }      
        .attractions-list.grabbing img {
          transform: scale(0.98);
        } 
        .dragstart a {
          pointer-events: none;
        } 
        @media only screen and (max-width: 320px) {
          .attractions {
            padding-bottom: 0;
          }
          .attractions-header {
            padding-bottom: 0;
          }
          .attractions__wrapper {
            padding-bottom: 0;
          }
        }   
      </style>

      <div class="slider-window-width">
        <div class="slider-container">
          <ul class="attractions-list">
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="6bb591ede08ee22e9328.jpg" alt="">
                <h3 class="attractions-description">Батут</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="3b1b5604faf78cb3818e.jpg" alt="">
                <h3 class="attractions-description">Экстрим-парк</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="b8c6133750f2b53668ba.jpg" alt="">
                <h3 class="attractions-description">Детский сад</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="829369eb5aff5854a60d.jpg" alt="">
                <h3 class="attractions-description">Лабиринт</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="399f36eb49f9b11e2736.jpg" alt="">
                <h3 class="attractions-description">Игровые автоматы</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('slider-component', Slider)

const sliderContainer = document.querySelector('.attractions-list'),
sliderWrapper = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))

if (window.matchMedia("(max-width: 400px)").matches) {
  sliderWrapper.style.width = window.innerWidth * 0.9 + "px"
} else {
  sliderWrapper.style.width = window.innerWidth * 0.5 + "px"
}

let currentIndex = 0
let startPosition = 0
let currentTranslate = 0
let prevTranslate = 0
let isDragging = false

document.addEventListener("drag", function( event ) {

}, false);

slides.forEach((slide, index) => {
  if (window.matchMedia("(max-width: 400px)").matches) {
    slide.style.width = window.innerWidth * .9 + "px"
    slide.style.height = window.innerWidth * .5 + 'px'
  } else {
    slide.style.width = window.innerWidth * .5 + "px"
    slide.style.height = window.innerWidth * .3 + 'px'
  }
  slide.style.marginRight = window.innerWidth * .1 + 'px'
  sliderImg = slide.querySelector('img')

  sliderImg.addEventListener('dragstart', e => e.preventDefault())
  
  sliderImg.addEventListener('touchstart', touchStart(index))
  sliderImg.addEventListener('touchend', touchEnd)
  sliderImg.addEventListener('touchmove', touchMove)

  sliderImg.addEventListener('mousedown', touchStart(index))
  sliderImg.addEventListener('mouseup', touchEnd)
  sliderImg.addEventListener('mousemove', touchMove)
  sliderImg.addEventListener('mouseleave', touchEnd)
})

sliderContainer.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function(e) {
    currentIndex = index
    startPosition = getPositionX(e)
    isDragging = true
    sliderContainer.classList.add('grabbing')
    clearInterval(infinitySlider)
  } 
}

function touchMove(e) {
  if(isDragging) {
    const currentPosition = getPositionX(e)
    currentTranslate = prevTranslate + currentPosition - startPosition
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`
      
    sliderContainer.style.transition = "transform .001s"
  }
}

function touchEnd(e) { 
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  if(movedBy > 100 && currentIndex > 0) currentIndex -= 1
  if(movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1


  if (window.matchMedia("(max-width: 400px)").matches) {
    currentTranslate = currentIndex * -window.innerWidth
  } else {
    currentTranslate = currentIndex * (-window.innerWidth * .5 - window.innerWidth * .1)
  }

  prevTranslate = currentTranslate
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`
  sliderContainer.style.transition = "transform 1.25s"
  sliderContainer.classList.remove('grabbing')
  if(movedBy != 0) {
    let captureClick = function(e) {
      e.stopPropagation()
      e.preventDefault()
      this.removeEventListener('click', captureClick, true); // cleanup
    }
      e.target.addEventListener('click', captureClick, true)
    }
}

function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
}

const infinitySlider = setInterval(() => {
  currentIndex++  
  if(currentIndex > 4) currentTranslate = 0, currentIndex = 0

  mediaQueriesTranslate()
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`
  sliderContainer.style.transition = "transform 1.25s"
}, 2500)

function mediaQueriesTranslate() {
  if (window.matchMedia("(max-width: 400px)").matches) {
    currentTranslate = currentIndex * (-window.innerWidth * .9 - parseInt(slides[0].style.marginRight))
  } else {
    currentTranslate = currentIndex * (-window.innerWidth * .5 - parseInt(slides[0].style.marginRight))
  }
}

setTimeout(() => {
  let yandexMaps = document.createElement('script');
  yandexMaps.setAttribute('src',"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39b19df971b7bfaaafe81f4d102954799a6bca83d1a5ee5f21154437236016e6&amp;width=auto&amp;height=460&amp;lang=ru_RU&amp;srcoll=true");
  document.body.appendChild(yandexMaps);
}, 10)



/***/ }),

/***/ "./src/assets/scripts/local/ya-maps.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/local/ya-maps.js ***!
  \*********************************************/
/***/ (() => {

setTimeout(() => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39b19df971b7bfaaafe81f4d102954799a6bca83d1a5ee5f21154437236016e6&amp;width=auto&amp;height=460&amp;lang=ru_RU&amp;srcoll=true";
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
}, 2000)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_assets_scripts_local_item-header_js":"673bfc218bfd3ba434ba","src_assets_scripts_local_items_css":"0c43c2ed1c7db9efb783"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "code:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_assets_scripts_local_item-header_js":1,"src_assets_scripts_local_items_css":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcode"] = self["webpackChunkcode"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/assets/scripts/local/app.js ***!
  \*****************************************/
// import './style.css'
// import './order.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import './footer.js'
// import './item-header.js'
// import './header.js'
// import './modal-window.js'
// import './order.js'
// import './items.css'

// var items = require("./items.css");
// var itemsHeader = require("./item-header.js");

/* Path css/js to items */
const patHome = () => {
  if(window.location.pathname === "/") {
    __webpack_require__(/*! ./style.css */ "./src/assets/scripts/local/style.css") 
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js") 
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js") 
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js") 
    __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css") 
    __webpack_require__(/*! ./touch-slider.js */ "./src/assets/scripts/local/touch-slider.js") 
    __webpack_require__(/*! ./ya-maps.js */ "./src/assets/scripts/local/ya-maps.js") 
  }
  return
}
patHome()

const pathOrder = () => {
  if(window.location.pathname === "/order.html") {
    __webpack_require__(/*! ./order.css */ "./src/assets/scripts/local/order.css")
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js")
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js")
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js")
    __webpack_require__(/*! ./order.js */ "./src/assets/scripts/local/order.js")
  }
} 
pathOrder()

const pathItems = (path) => {
  if(window.location.pathname === path) {
    __webpack_require__.e(/*! import() */ "src_assets_scripts_local_item-header_js").then(__webpack_require__.bind(__webpack_require__, /*! ./item-header.js */ "./src/assets/scripts/local/item-header.js"))
    __webpack_require__.e(/*! import() */ "src_assets_scripts_local_items_css").then(__webpack_require__.bind(__webpack_require__, /*! ./items.css */ "./src/assets/scripts/local/items.css"))
  }
}
pathItems("/bezlimit-v-megalende.html")
pathItems("/otmet-den-rozhdeniya-v-kino.html")
pathItems("/vipusknoi-v-megalende.html")
pathItems("/megalend-polnostyu-otkrit.html")
pathItems("/pitstsa-v-podarok.html")
pathItems("/bonusnaya-sistema.html")
pathItems("/igrovie-avtomati-otkriti.html")
// require.ensure(["c"], function(require) {
//   require("b").xyz();
//   var d = require("d");
// });


// /*Menu*/
// let navToggle = document.getElementById('nav-toggle')
// let burger = document.querySelector('.burger')
// let navBtn = document.querySelector('.nav-btn')
// let navMenu = document.getElementById('nav-menu')
// let leftNav = document.querySelector('.left-nav')
// let rigthNav = document.querySelector('.rigth-nav')
// let logoWrapper = document.querySelector('.logo-wrapper')
// let container = document.querySelector('.container')

// function menuActive() {
//   burger.classList.toggle('active')
//   navMenu.classList.toggle('active')
//   leftNav.classList.toggle('active')
//   rigthNav.classList.toggle('active')
//   container.classList.toggle('active')
//   logoWrapper.classList.toggle('active')
// }

// function hideMenu() {
//   burger.classList.remove('active')
//   navMenu.classList.remove('active')
//   leftNav.classList.remove('active')
//   rigthNav.classList.remove('active')
//   container.classList.remove('active')
//   logoWrapper.classList.remove('active')
// }

// navToggle.addEventListener('click', menuActive)

// /* Scroll to element */
// let parkLink = document.getElementById('park')
// let attractions = document.querySelector('.attractions')
// let cafeLink = document.getElementById('cafe')
// let cafe = document.querySelector('.cafe')
// let concactsLink = document.getElementById('contacts')
// let contacts = document.querySelector('.contacts')
// let logo = document.getElementById('logo')
// let intro = document.querySelector('.intro')

// function scrollToAttractions() {
//   attractions.scrollIntoView({behavior: "smooth"})
//   hideMenu()  
// }

// function scrollToCafe() {
//   cafe.scrollIntoView({behavior: "smooth"}) 
//   hideMenu()
// }

// function scrollToContacts() {
//   contacts.scrollIntoView({behavior: "smooth"})
//   hideMenu()
// }

// function scrollToHeader() {
//   intro.scrollIntoView({behavior: "smooth"})
//   hideMenu()
// }

// parkLink.addEventListener('click', scrollToAttractions)
// cafeLink.addEventListener('click', scrollToCafe)
// concactsLink.addEventListener('click', scrollToContacts)
// logo.addEventListener('click', scrollToHeader)

// /* Scroll hide menu */
// let scrollPos = 0
// let windowY = window.scrollY

// function checkPosition() {
//   let windowY = window.scrollY;
//   if (windowY < scrollPos) {
//     navMenu.classList.remove('nav-scroll')
//     navBtn.classList.remove('nav-btn--scroll')
//   } else {
//     navMenu.classList.add('nav-scroll')
//     navBtn.classList.add('nav-btn--scroll')
//   }
//   scrollPos = windowY;
// }

// window.addEventListener('scroll', checkPosition);

/* Carousel */
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("attractions-item");
//   if (n > 3) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   if (window.matchMedia("(min-width: 915px)").matches) {
//     slides[slideIndex - 1].style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//     slides[slideIndex + 1].style.display = "block";
//   } else if(window.matchMedia("(min-width: 670px)").matches) {
//     slides[slideIndex - 1].style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//   } else {
//     slides[slideIndex].style.display = "block";  
//   }
// }

// let nextBtn = document.querySelector('.next-btn')
// let prevBtn = document.querySelector('.prev-btn')
// let slides = document.querySelectorAll(".attractions-item");

// prevBtn.addEventListener('click', () => {
//   slides.forEach(el => {
//     console.log(el);
//   })
//   // console.log(slides[0].style.display = 'none ')
// })








// Готовый слайдер
// const carouselSlider = document.querySelector('.attractions-list')
// const carouselItem = document.querySelectorAll('.attractions-item')
// const itemWidth = document.querySelector('.attractions-list').clientWidth / (carouselItem.length)

// let nextBtn = document.querySelector('.next-btn')
// let prevBtn = document.querySelector('.prev-btn')

// let counter = 0
// const size = 446

// prevBtn.addEventListener('click', () => {
//   counter--
//   carouselSlider.style.transform = 'translateX(' + (counter * - size) + 'px)'
//   if(counter <= 0) {
//     counter = 3
//   } 
// })

// nextBtn.addEventListener('click', () => {
//   counter++
//   carouselSlider.style.transform = 'translateX(' + (counter * - size) + 'px)'
//   if(counter >= 2) {
//     counter = -1
//   }
// })

// function sliderMedia() {
// if (window.matchMedia("(min-width: 915px)").matches) {
//   carouselSlider.style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//     slides[slideIndex + 1].style.display = "block";
//   } else if(window.matchMedia("(min-width: 670px)").matches) {
//     slides[slideIndex - 1].style.display = "block";  
//     slides[slideIndex].style.display = "block";  
//   } else {
//     slides[slideIndex].style.display = "block";  
//   }
// }

// sliderMedia()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuY3NzP2MwYzciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9zdHlsZS5jc3M/ODY0NiIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL21lbnUtbmF2LmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbW9kYWwtd2luZG93LmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC90b3VjaC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC95YS1tYXBzLmpzIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRDs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQSwrRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDO0FBQ0E7QUFDQTtBQUNBLGlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7OztBQ25WQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ROQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7O0FDdkREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsaUJBQWlCO0FBQ25FO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrS0FBK0ssZUFBZSxlQUFlLGVBQWU7QUFDNU47QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5T0Q7QUFDQTtBQUNBLGdLQUFnSyxlQUFlLGVBQWUsZUFBZTtBQUM3TTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE87Ozs7OztVQ05EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsNkhBQTZIO1dBQzNKLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsNEJBQTRCLFFBQVE7V0FDMUQ7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLG9CQUFvQjtXQUNwQztXQUNBLGtHQUFrRyxZQUFZLE9BQU87V0FDckg7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0VBQWtFLGtDQUFrQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NmQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSw2QkFBNkI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsOEJBQThCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQjtXQUNsQjtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUEsUzs7Ozs7V0NuRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQzs7V0FFaEM7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLGNBQWM7V0FDZDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLDRHOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLDBEQUFZO0FBQ3hCLElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLG1IQUErQztBQUMzRCxJQUFJLG1CQUFPLENBQUMscUVBQW1CO0FBQy9CLElBQUksbUJBQU8sQ0FBQywyREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCLElBQUksbUJBQU8sQ0FBQywwREFBWTtBQUN4QixJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLHFFQUFtQjtBQUMvQixJQUFJLG1CQUFPLENBQUMsdURBQVk7QUFDeEI7QUFDQSxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseU1BQTBCO0FBQzlCLElBQUksMExBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG1CQUFtQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGU7QUFDakIsaUJBQWlCO0FBQ2pCLGdCQUFnQixtQkFBbUI7QUFDbkMsMEM7QUFDQTtBQUNBO0FBQ0Esc0Q7QUFDQSxrRDtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNEO0FBQ0Esa0Q7QUFDQSxNQUFNO0FBQ04sa0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJOzs7Ozs7Ozs7QUFTSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLDRDO0FBQ0Esa0Q7QUFDQTtBQUNBLE1BQU07QUFDTixzRDtBQUNBLGtEO0FBQ0EsTUFBTTtBQUNOLGtEO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLjQwMjgxMWNlYWI5ZmY3ZGY3YTIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY2xhc3MgRm9vdGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMTM0MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlcl9faW5uZXIge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHggNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlcl9fbG9nbyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlcl9fZGVzY3JpcHRpb24sIC5mb290ZXJfX2ZlZWRiYWNrIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIGNvbG9yOiAjZDZkNmQ2O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2lubmVyXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZm9vdGVyX19sb2dvXCIgc3JjPVwiMjViNDI2ZmI3NjY4ZGRlM2FiZWYucG5nXCIgYWx0PVwi0JvQvtCz0L7RgtC40L8g0JzQtdCz0LDQu9C10L3QtFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgwqkg0KXQvtC70LTQuNC90LMgwqvQnNC10LPQsNC/0L7Qu9C40YHCuywgMjAwOSDigJQgMjAyMCA8YnI+XHJcbiAgICAgICAgICAgINCj0YHQu9C+0LLQuNGPINC00L7Qs9C+0LLQvtGA0LAg0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLRiyAo0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtGMINC4INC30LDRidC40YLQsCDQv9C10YDRgdC+0L3QsNC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LgpIDxicj5cclxuICAgICAgICAgICAg0J/RgNCw0LLQuNC70LAg0L/QvtGB0LXRidC10L3QuNGPIDxicj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJmb290ZXJfX2ZlZWRiYWNrXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZDZaZVpCM2w1bVFPc2R1YjAzT1RRTGRTYkpyVW1FQ192Y3dZUHFyaVBzbGdMNHRnL3ZpZXdmb3JtP2VudHJ5LjYzMjY0MDk3OD0lRDAlOUQlRDAlQjglRDAlQjYlRDAlQkQlRDAlQjglRDAlQjkrJUQwJUEyJUQwJUIwJUQwJUIzJUQwJUI4JUQwJUJCXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICA+0J7RgdGC0LDQstC40YLRjCDQvtGC0LfRi9CyPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmb290ZXItY29tcG9uZW50JywgRm9vdGVyKSIsImNsYXNzIE1lbnVOYXYgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBsZXQgY2lyY2xlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4yMiArICdweCdcclxuXHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2U0O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyX19tZW51LWJnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlcl9fbWVudS1iZy0tYWN0aXZlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEzNTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdCwgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0LS1hY3RpdmUsIC5tZW51X19yaWdodC0tYWN0aXZlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgLjMyLCAxLjIpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4xcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQge1xyXG4gICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgIHdpZHRoOiAyMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0gYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWZmZmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDMwcHggOXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fdG9nZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI3MHB4KSB7XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKCR7Y2lyY2xlV2lkdGh9IGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgIGhlaWd0aDogMTAwJTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICAuaGVhZGVyLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg3MzBweCBhdCBjZW50ZXIpO1xyXG4gICAgICAgICAgICBoZWlndGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmU6OmFmdGVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC50b2dnbGVfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgICBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAuMzIsIDEuMik7ICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuN3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjhzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC45cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjFzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2xlZnQge1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51LWJnXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPG5hdiBjbGFzcz1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QnS7QotCw0LPQuNC7PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCf0LDRgNC6PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCa0LDRhNC1PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y88L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JzQtdGA0L7Qv9GA0LjRj9GC0LjRjzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QkNC60YbQuNC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCm0LXQvdGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImJhYTJiNDVkN2M5YmVkNGEyNzVmLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIHR5cGU9XCJhXCIgY2xhc3M9XCJtZW51X19idG5cIj7Ql9Cw0LrQsNC30LDRgtGMINC/0YDQsNC30LTQvdC40Lo8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGVfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudV9fdG9nZ2xlXCI+0JzQtdC90Y48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCduYXYtY29tcG9uZW50JywgTWVudU5hdilcclxuXHJcbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZV9fd3JhcHBlcicpXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJylcclxubGV0IG1lbnVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xlZnQnKVxyXG5sZXQgbWVudUxlZnRMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJylcclxubGV0IG1lbnVSaWd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19yaWdodCcpXHJcbmxldCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdG9nZ2xlJylcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLWFjdGl2ZScpXHJcbiAgbWVudUxlZnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fbGVmdC0tYWN0aXZlJylcclxuICBtZW51UmlndGguY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fcmlnaHQtLWFjdGl2ZScpXHJcbiAgdG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3RvZ2dsZS0tYWN0aXZlJylcclxuICBtZW51TGVmdExpLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2l0ZW0tLWFjdGl2ZScpXHJcbiAgfSlcclxufVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KVxyXG4iLCJjbGFzcyBNb2RhbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX3dyYXBwZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogOTV2aDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkIGxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idXR0b25zIHtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCAubmV4dC1idG4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OTBkYztcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwgLnByZXYtYnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0bi1jbG9zZSB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0bi1jbG9zZSBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNzM7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAubW9kYWxfX2Zvcm0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAubW9kYWxfX2Zvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDg1dnc7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb3JtXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+0JTQsNGC0LAg0L/RgNC+0LLQtdC00LXQvdC40Y8g0L/RgNCw0LfQtNC90LjQutCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlXCIgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPtCk0JjQnjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCY0LLQsNC90L7QsiDQmNCy0LDQvSDQmNCy0LDQvdC+0LLQuNGHXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+0JzQvtCx0LjQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBob25lXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiODk5OTEyMzQ1NjdcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsQGVtaWFsLnJ1XCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBwcmV2LWJ0blwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG5leHQtYnRuXCI+0JTQsNC70LXQtTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLW1vZGFsLWJ0blwiIGNsYXNzPVwibW9kYWxfX2J0bi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbW9kYWwtY29tcG9uZW50JywgTW9kYWwpXHJcblxyXG4vKiBPcGVuIG1vZGFsICovXHJcbmxldCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcblxyXG5uYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59KVxyXG5cclxuLyogQ2xvc2UgbW9kYWwgd2luZG93ICovXHJcbmxldCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsLWJ0bicpXHJcbmxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fd3JhcHBlcicpXHJcbmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKGV2ZW50KSB7XHJcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC50YWdOYW1lXHJcblxyXG4gIGlmKHRhcmdldCAhPSAnQlVUVE9OJykgcmV0dXJuXHJcbiAgXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpIHtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn0pXHJcblxyXG4vKiBDdXJyZW50IGRhdGUgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKClcclxuIiwiLyogU2hvdyBpdGVtIGJ0biAqL1xyXG5sZXQgc2hvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWJ0bicpXHJcbmxldCBjYXJkSGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3dyYXBwZXInKVxyXG5cclxuZnVuY3Rpb24gc2hvd0l0ZW0oKSB7XHJcbiAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgY2FyZEhpZGRlbi5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLS1oaWRkZW4nKVxyXG59XHJcblxyXG5zaG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0l0ZW0pXHJcblxyXG4vLyAvKiBDdXJyZW50IGRhdGUgKi9cclxuLy8gbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbi8vIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xyXG5cclxuLy8gZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbi8vICAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKClcclxuLy8gICBpZiAoZGQgPCAxMCkgZGQgPSAnMCcgKyBkZFxyXG5cclxuLy8gICBsZXQgTU0gPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbi8vICAgaWYgKE1NIDwgMTApIE1NID0gJzAnICsgTU1cclxuXHJcbi8vICAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuLy8gICBpZiAoeXl5eSA8IDEwKSB5eXl5ID0gJzAnICsgeXl5eVxyXG5cclxuLy8gICByZXR1cm4geXl5eSArICctJyArIE1NICsgJy0nICsgZGRcclxuLy8gfVxyXG5cclxuLy8gbGV0IGN1cnJlbnREYXRlID0gZm9ybWF0RGF0ZShkYXRlKVxyXG4vLyBkYXRlSW5wdXQudmFsdWUgPSBjdXJyZW50RGF0ZVxyXG5cclxuaW1wb3J0ICcuL29yZGVyLmNzcydcclxuXHJcbi8qIE9wZW4gbW9kYWwgKi9cclxubGV0IG9mZmVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZXJzX19saXN0JylcclxubGV0IHBob25lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG9uZScpXHJcbmxldCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcbmxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fd3JhcHBlcicpXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKGV2ZW50KSB7XHJcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC50YWdOYW1lXHJcblxyXG4gIGlmKHRhcmdldCAhPSAnQlVUVE9OJykgcmV0dXJuXHJcbiAgXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufVxyXG5cclxub2ZmZXJzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxubmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcblxyXG5waG9uZVNlY3Rpb24uZm9yRWFjaChlbCA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbn0pIiwiY2xhc3MgU2xpZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcmFnc3RhcnQgYSB7IFxyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXItd2luZG93LXdpZHRoIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saXN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWl0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtaXRlbSBpbWcge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2UwZGZkZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsNjQsNjcsMC4zKSwwIDJweCA2cHggMnB4IHJnYmEoNjAsNjQsNjcsMC4xNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLmRyYWdzdGFydCB7XHJcbiAgICAgICAgLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmFiYmluZyB7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGlzdC5ncmFiYmluZyBpbWcge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5kcmFnc3RhcnQgYSB7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgIC5hdHRyYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zX193cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13aW5kb3ctd2lkdGhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiNmJiNTkxZWRlMDhlZTIyZTkzMjguanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCR0LDRgtGD0YI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjNiMWI1NjA0ZmFmNzhjYjM4MThlLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QrdC60YHRgtGA0LjQvC3Qv9Cw0YDQujwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYjhjNjEzMzc1MGYyYjUzNjY4YmEuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCU0LXRgtGB0LrQuNC5INGB0LDQtDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiODI5MzY5ZWI1YWZmNTg1NGE2MGQuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCb0LDQsdC40YDQuNC90YI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjM5OWYzNmViNDlmOWIxMWUyNzM2LmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QmNCz0YDQvtCy0YvQtSDQsNCy0YLQvtC80LDRgtGLPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NsaWRlci1jb21wb25lbnQnLCBTbGlkZXIpXHJcblxyXG5jb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0cmFjdGlvbnMtbGlzdCcpLFxyXG5zbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250YWluZXInKSxcclxuICBzbGlkZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdHRyYWN0aW9ucy1pdGVtJykpXHJcblxyXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gIHNsaWRlcldyYXBwZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOSArIFwicHhcIlxyXG59IGVsc2Uge1xyXG4gIHNsaWRlcldyYXBwZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSArIFwicHhcIlxyXG59XHJcblxyXG5sZXQgY3VycmVudEluZGV4ID0gMFxyXG5sZXQgc3RhcnRQb3NpdGlvbiA9IDBcclxubGV0IGN1cnJlbnRUcmFuc2xhdGUgPSAwXHJcbmxldCBwcmV2VHJhbnNsYXRlID0gMFxyXG5sZXQgaXNEcmFnZ2luZyA9IGZhbHNlXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG59LCBmYWxzZSk7XHJcblxyXG5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuOSArIFwicHhcIlxyXG4gICAgc2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuNSArICdweCdcclxuICB9IGVsc2Uge1xyXG4gICAgc2xpZGUuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC41ICsgXCJweFwiXHJcbiAgICBzbGlkZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4zICsgJ3B4J1xyXG4gIH1cclxuICBzbGlkZS5zdHlsZS5tYXJnaW5SaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjEgKyAncHgnXHJcbiAgc2xpZGVySW1nID0gc2xpZGUucXVlcnlTZWxlY3RvcignaW1nJylcclxuXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxyXG4gIFxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydChpbmRleCkpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSlcclxuXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRvdWNoU3RhcnQoaW5kZXgpKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdG91Y2hFbmQpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRvdWNoTW92ZSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRvdWNoRW5kKVxyXG59KVxyXG5cclxuc2xpZGVyQ29udGFpbmVyLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hTdGFydChpbmRleCkge1xyXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XHJcbiAgICBjdXJyZW50SW5kZXggPSBpbmRleFxyXG4gICAgc3RhcnRQb3NpdGlvbiA9IGdldFBvc2l0aW9uWChlKVxyXG4gICAgaXNEcmFnZ2luZyA9IHRydWVcclxuICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmFiYmluZycpXHJcbiAgICBjbGVhckludGVydmFsKGluZmluaXR5U2xpZGVyKVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XHJcbiAgaWYoaXNEcmFnZ2luZykge1xyXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZ2V0UG9zaXRpb25YKGUpXHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gcHJldlRyYW5zbGF0ZSArIGN1cnJlbnRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb25cclxuICAgIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gICAgICBcclxuICAgIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gLjAwMXNcIlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hFbmQoZSkgeyBcclxuICBpc0RyYWdnaW5nID0gZmFsc2VcclxuICBjb25zdCBtb3ZlZEJ5ID0gY3VycmVudFRyYW5zbGF0ZSAtIHByZXZUcmFuc2xhdGVcclxuXHJcbiAgaWYobW92ZWRCeSA+IDEwMCAmJiBjdXJyZW50SW5kZXggPiAwKSBjdXJyZW50SW5kZXggLT0gMVxyXG4gIGlmKG1vdmVkQnkgPCAtMTAwICYmIGN1cnJlbnRJbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxKSBjdXJyZW50SW5kZXggKz0gMVxyXG5cclxuXHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAtd2luZG93LmlubmVyV2lkdGhcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuNSAtIHdpbmRvdy5pbm5lcldpZHRoICogLjEpXHJcbiAgfVxyXG5cclxuICBwcmV2VHJhbnNsYXRlID0gY3VycmVudFRyYW5zbGF0ZVxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMS4yNXNcIlxyXG4gIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdncmFiYmluZycpXHJcbiAgaWYobW92ZWRCeSAhPSAwKSB7XHJcbiAgICBsZXQgY2FwdHVyZUNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUNsaWNrLCB0cnVlKTsgLy8gY2xlYW51cFxyXG4gICAgfVxyXG4gICAgICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcHR1cmVDbGljaywgdHJ1ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zaXRpb25YKGUpIHtcclxuICByZXR1cm4gZS50eXBlLmluY2x1ZGVzKCdtb3VzZScpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbn1cclxuXHJcbmNvbnN0IGluZmluaXR5U2xpZGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGN1cnJlbnRJbmRleCsrICBcclxuICBpZihjdXJyZW50SW5kZXggPiA0KSBjdXJyZW50VHJhbnNsYXRlID0gMCwgY3VycmVudEluZGV4ID0gMFxyXG5cclxuICBtZWRpYVF1ZXJpZXNUcmFuc2xhdGUoKVxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMS4yNXNcIlxyXG59LCAyNTAwKVxyXG5cclxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzVHJhbnNsYXRlKCkge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC45IC0gcGFyc2VJbnQoc2xpZGVzWzBdLnN0eWxlLm1hcmdpblJpZ2h0KSlcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuNSAtIHBhcnNlSW50KHNsaWRlc1swXS5zdHlsZS5tYXJnaW5SaWdodCkpXHJcbiAgfVxyXG59XHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBsZXQgeWFuZGV4TWFwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gIHlhbmRleE1hcHMuc2V0QXR0cmlidXRlKCdzcmMnLFwiaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvc2VydmljZXMvY29uc3RydWN0b3IvMS4wL2pzLz91bT1jb25zdHJ1Y3RvciUzQTM5YjE5ZGY5NzFiN2JmYWFhZmU4MWY0ZDEwMjk1NDc5OWE2YmNhODNkMWE1ZWU1ZjIxMTU0NDM3MjM2MDE2ZTYmYW1wO3dpZHRoPWF1dG8mYW1wO2hlaWdodD00NjAmYW1wO2xhbmc9cnVfUlUmYW1wO3NyY29sbD10cnVlXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoeWFuZGV4TWFwcyk7XHJcbn0sIDEwKVxyXG5cclxuIiwic2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1L3NlcnZpY2VzL2NvbnN0cnVjdG9yLzEuMC9qcy8/dW09Y29uc3RydWN0b3IlM0EzOWIxOWRmOTcxYjdiZmFhYWZlODFmNGQxMDI5NTQ3OTlhNmJjYTgzZDFhNWVlNWYyMTE1NDQzNzIzNjAxNmU2JmFtcDt3aWR0aD1hdXRvJmFtcDtoZWlnaHQ9NDYwJmFtcDtsYW5nPXJ1X1JVJmFtcDtzcmNvbGw9dHJ1ZVwiO1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiYWxlcnRcIjtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBcIjxzdHJvbmc+0JLRgdC10Lwg0L/RgNC40LLQtdGCITwvc3Ryb25nPiDQktGLINC/0YDQvtGH0LjRgtCw0LvQuCDQstCw0LbQvdC+0LUg0YHQvtC+0LHRidC10L3QuNC1LlwiO1xyXG59LCAyMDAwKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW0taGVhZGVyX2pzXCI6XCI2NzNiZmMyMThiZmQzYmE0MzRiYVwiLFwic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2Nzc1wiOlwiMGM0M2MyZWQxYzdkYjllZmI3ODNcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmNzc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjb2RlOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJ2YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xudmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5taW5pQ3NzID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdHZhciBjc3NDaHVua3MgPSB7XCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbS1oZWFkZXJfanNcIjoxLFwic3JjX2Fzc2V0c19zY3JpcHRzX2xvY2FsX2l0ZW1zX2Nzc1wiOjF9O1xuXHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcblx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBsb2FkU3R5bGVzaGVldChjaHVua0lkKS50aGVuKCgpID0+IHtcblx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0fSwgKGUpID0+IHtcblx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pKTtcblx0fVxufTtcblxuLy8gbm8gaG1yIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2RlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbi8vIGltcG9ydCAnLi9vcmRlci5jc3MnXHJcbi8vIGltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJ1xyXG4vLyBpbXBvcnQgJy4vZm9vdGVyLmpzJ1xyXG4vLyBpbXBvcnQgJy4vaXRlbS1oZWFkZXIuanMnXHJcbi8vIGltcG9ydCAnLi9oZWFkZXIuanMnXHJcbi8vIGltcG9ydCAnLi9tb2RhbC13aW5kb3cuanMnXHJcbi8vIGltcG9ydCAnLi9vcmRlci5qcydcclxuLy8gaW1wb3J0ICcuL2l0ZW1zLmNzcydcclxuXHJcbi8vIHZhciBpdGVtcyA9IHJlcXVpcmUoXCIuL2l0ZW1zLmNzc1wiKTtcclxuLy8gdmFyIGl0ZW1zSGVhZGVyID0gcmVxdWlyZShcIi4vaXRlbS1oZWFkZXIuanNcIik7XHJcblxyXG4vKiBQYXRoIGNzcy9qcyB0byBpdGVtcyAqL1xyXG5jb25zdCBwYXRIb21lID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vc3R5bGUuY3NzJykgXHJcbiAgICByZXF1aXJlKCcuL2Zvb3Rlci5qcycpIFxyXG4gICAgcmVxdWlyZSgnLi9tZW51LW5hdicpIFxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKSBcclxuICAgIHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi90b3VjaC1zbGlkZXIuanMnKSBcclxuICAgIHJlcXVpcmUoJy4veWEtbWFwcy5qcycpIFxyXG4gIH1cclxuICByZXR1cm5cclxufVxyXG5wYXRIb21lKClcclxuXHJcbmNvbnN0IHBhdGhPcmRlciA9ICgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL29yZGVyLmh0bWxcIikge1xyXG4gICAgcmVxdWlyZSgnLi9vcmRlci5jc3MnKVxyXG4gICAgcmVxdWlyZSgnLi9tZW51LW5hdicpXHJcbiAgICByZXF1aXJlKCcuL2Zvb3Rlci5qcycpXHJcbiAgICByZXF1aXJlKCcuL21vZGFsLXdpbmRvdy5qcycpXHJcbiAgICByZXF1aXJlKCcuL29yZGVyLmpzJylcclxuICB9XHJcbn0gXHJcbnBhdGhPcmRlcigpXHJcblxyXG5jb25zdCBwYXRoSXRlbXMgPSAocGF0aCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gcGF0aCkge1xyXG4gICAgaW1wb3J0KCcuL2l0ZW0taGVhZGVyLmpzJylcclxuICAgIGltcG9ydCgnLi9pdGVtcy5jc3MnKVxyXG4gIH1cclxufVxyXG5wYXRoSXRlbXMoXCIvYmV6bGltaXQtdi1tZWdhbGVuZGUuaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvb3RtZXQtZGVuLXJvemhkZW5peWEtdi1raW5vLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL3ZpcHVza25vaS12LW1lZ2FsZW5kZS5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9tZWdhbGVuZC1wb2xub3N0eXUtb3Rrcml0Lmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL3BpdHN0c2Etdi1wb2Rhcm9rLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL2JvbnVzbmF5YS1zaXN0ZW1hLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL2lncm92aWUtYXZ0b21hdGktb3Rrcml0aS5odG1sXCIpXHJcbi8vIHJlcXVpcmUuZW5zdXJlKFtcImNcIl0sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcclxuLy8gICByZXF1aXJlKFwiYlwiKS54eXooKTtcclxuLy8gICB2YXIgZCA9IHJlcXVpcmUoXCJkXCIpO1xyXG4vLyB9KTtcclxuXHJcblxyXG4vLyAvKk1lbnUqL1xyXG4vLyBsZXQgbmF2VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi10b2dnbGUnKVxyXG4vLyBsZXQgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpXHJcbi8vIGxldCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ0bicpXHJcbi8vIGxldCBuYXZNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1tZW51JylcclxuLy8gbGV0IGxlZnROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1uYXYnKVxyXG4vLyBsZXQgcmlndGhOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlndGgtbmF2JylcclxuLy8gbGV0IGxvZ29XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28td3JhcHBlcicpXHJcbi8vIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuXHJcbi8vIGZ1bmN0aW9uIG1lbnVBY3RpdmUoKSB7XHJcbi8vICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbi8vICAgbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4vLyAgIGxlZnROYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuLy8gICByaWd0aE5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4vLyAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4vLyAgIGxvZ29XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGhpZGVNZW51KCkge1xyXG4vLyAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICBsZWZ0TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgcmlndGhOYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICBsb2dvV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyB9XHJcblxyXG4vLyBuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51QWN0aXZlKVxyXG5cclxuLy8gLyogU2Nyb2xsIHRvIGVsZW1lbnQgKi9cclxuLy8gbGV0IHBhcmtMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmsnKVxyXG4vLyBsZXQgYXR0cmFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0cmFjdGlvbnMnKVxyXG4vLyBsZXQgY2FmZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FmZScpXHJcbi8vIGxldCBjYWZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhZmUnKVxyXG4vLyBsZXQgY29uY2FjdHNMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzJylcclxuLy8gbGV0IGNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJylcclxuLy8gbGV0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpXHJcbi8vIGxldCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRybycpXHJcblxyXG4vLyBmdW5jdGlvbiBzY3JvbGxUb0F0dHJhY3Rpb25zKCkge1xyXG4vLyAgIGF0dHJhY3Rpb25zLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbi8vICAgaGlkZU1lbnUoKSAgXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNjcm9sbFRvQ2FmZSgpIHtcclxuLy8gICBjYWZlLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pIFxyXG4vLyAgIGhpZGVNZW51KClcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2Nyb2xsVG9Db250YWN0cygpIHtcclxuLy8gICBjb250YWN0cy5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KVxyXG4vLyAgIGhpZGVNZW51KClcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2Nyb2xsVG9IZWFkZXIoKSB7XHJcbi8vICAgaW50cm8uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSlcclxuLy8gICBoaWRlTWVudSgpXHJcbi8vIH1cclxuXHJcbi8vIHBhcmtMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9BdHRyYWN0aW9ucylcclxuLy8gY2FmZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxUb0NhZmUpXHJcbi8vIGNvbmNhY3RzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRvQ29udGFjdHMpXHJcbi8vIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxUb0hlYWRlcilcclxuXHJcbi8vIC8qIFNjcm9sbCBoaWRlIG1lbnUgKi9cclxuLy8gbGV0IHNjcm9sbFBvcyA9IDBcclxuLy8gbGV0IHdpbmRvd1kgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuLy8gZnVuY3Rpb24gY2hlY2tQb3NpdGlvbigpIHtcclxuLy8gICBsZXQgd2luZG93WSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4vLyAgIGlmICh3aW5kb3dZIDwgc2Nyb2xsUG9zKSB7XHJcbi8vICAgICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zY3JvbGwnKVxyXG4vLyAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1idG4tLXNjcm9sbCcpXHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LXNjcm9sbCcpXHJcbi8vICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bi0tc2Nyb2xsJylcclxuLy8gICB9XHJcbi8vICAgc2Nyb2xsUG9zID0gd2luZG93WTtcclxuLy8gfVxyXG5cclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrUG9zaXRpb24pO1xyXG5cclxuLyogQ2Fyb3VzZWwgKi9cclxuLy8gdmFyIHNsaWRlSW5kZXggPSAxO1xyXG4vLyBzaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG5cclxuLy8gZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XHJcbi8vICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjdXJyZW50U2xpZGUobikge1xyXG4vLyAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuLy8gICB2YXIgaTtcclxuLy8gICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF0dHJhY3Rpb25zLWl0ZW1cIik7XHJcbi8vICAgaWYgKG4gPiAzKSB7c2xpZGVJbmRleCA9IDF9ICAgIFxyXG4vLyAgIGlmIChuIDwgMSkge3NsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RofVxyXG4vLyAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4vLyAgIH1cclxuLy8gICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5MTVweClcIikubWF0Y2hlcykge1xyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXggKyAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgIH0gZWxzZSBpZih3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDY3MHB4KVwiKS5tYXRjaGVzKSB7XHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBsZXQgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LWJ0bicpXHJcbi8vIGxldCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtYnRuJylcclxuLy8gbGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXR0cmFjdGlvbnMtaXRlbVwiKTtcclxuXHJcbi8vIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgc2xpZGVzLmZvckVhY2goZWwgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coZWwpO1xyXG4vLyAgIH0pXHJcbi8vICAgLy8gY29uc29sZS5sb2coc2xpZGVzWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSAnKVxyXG4vLyB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vINCT0L7RgtC+0LLRi9C5INGB0LvQsNC50LTQtdGAXHJcbi8vIGNvbnN0IGNhcm91c2VsU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dHJhY3Rpb25zLWxpc3QnKVxyXG4vLyBjb25zdCBjYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0cmFjdGlvbnMtaXRlbScpXHJcbi8vIGNvbnN0IGl0ZW1XaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRyYWN0aW9ucy1saXN0JykuY2xpZW50V2lkdGggLyAoY2Fyb3VzZWxJdGVtLmxlbmd0aClcclxuXHJcbi8vIGxldCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtYnRuJylcclxuLy8gbGV0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi1idG4nKVxyXG5cclxuLy8gbGV0IGNvdW50ZXIgPSAwXHJcbi8vIGNvbnN0IHNpemUgPSA0NDZcclxuXHJcbi8vIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgY291bnRlci0tXHJcbi8vICAgY2Fyb3VzZWxTbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChjb3VudGVyICogLSBzaXplKSArICdweCknXHJcbi8vICAgaWYoY291bnRlciA8PSAwKSB7XHJcbi8vICAgICBjb3VudGVyID0gM1xyXG4vLyAgIH0gXHJcbi8vIH0pXHJcblxyXG4vLyBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNvdW50ZXIrK1xyXG4vLyAgIGNhcm91c2VsU2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoY291bnRlciAqIC0gc2l6ZSkgKyAncHgpJ1xyXG4vLyAgIGlmKGNvdW50ZXIgPj0gMikge1xyXG4vLyAgICAgY291bnRlciA9IC0xXHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gc2xpZGVyTWVkaWEoKSB7XHJcbi8vIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDkxNXB4KVwiKS5tYXRjaGVzKSB7XHJcbi8vICAgY2Fyb3VzZWxTbGlkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuLy8gICAgIHNsaWRlc1tzbGlkZUluZGV4ICsgMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICB9IGVsc2UgaWYod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2NzBweClcIikubWF0Y2hlcykge1xyXG4vLyAgICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gc2xpZGVyTWVkaWEoKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9