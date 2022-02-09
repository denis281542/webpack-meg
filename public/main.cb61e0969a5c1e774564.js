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

/***/ "./src/assets/scripts/local/animation/animation.css":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/local/animation/animation.css ***!
  \**********************************************************/
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

/***/ "./src/assets/scripts/local/showFullLink/showFullLink.css":
/*!****************************************************************!*\
  !*** ./src/assets/scripts/local/showFullLink/showFullLink.css ***!
  \****************************************************************/
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

/***/ "./src/assets/scripts/local/animation/animation.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/local/animation/animation.js ***!
  \*********************************************************/
/***/ (() => {

const link = document.querySelector('.item-link')

let screenPositionShow = window.innerHeight/1.2
let screenPositionRemove = window.innerHeight/6

document.addEventListener('scroll', () => {
    showElemAnimation(link, screenPositionShow, 'active')
})

document.addEventListener('scroll', () => {
    removeElemAnimation(link, screenPositionRemove, 'active')
})

function showElemAnimation(elemen, screenPositionShow, classCss) {
    if(elemen.getBoundingClientRect().top < screenPositionShow) { 
    elemen.classList.add(classCss) 
    }
}

function removeElemAnimation(elemen, screenPositionRemove, classCss) {
    if(elemen.getBoundingClientRect().bottom < screenPositionRemove) {
    elemen.classList.remove(classCss) 
    }
} 

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

/***/ "./src/assets/scripts/local/lazyLoadImg.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/local/lazyLoadImg.js ***!
  \*************************************************/
/***/ (() => {

let imgs = document.querySelectorAll('img')
imgs.forEach(i => {
    if(!i.loading) {
        i.style.backgroundColor = '#ccc'
    }
})

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
        .tab {
          display: none;
        }        
        input.invalid {
          background-color: rgb(250, 234, 234);
        }
        .success {
          border-color: #2ecc71;
        }
        .modal {
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(3px);
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
          border-radius: 10px;
          overflow-y: auto;
        }
        .modal__field {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          max-width: 400px;
          width: 100%;
          position: relative;
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
          display: none;
          background-color: #6c757d;
          cursor: pointer;
          position: relative;
        }
        .modal__btn-close {
          border: none;
          position: absolute;
          z-index: 9999;
          right: 0;
          top: 2px;
          background-color: transparent;
          cursor: pointer;
        }
        .modal__btn-close i {
          color: #fff;
          font-size: 32px;
          line-height: 0.8;
          background-color: #ff0073;
        }     
        .package {
          height: 37px;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
        }   
        .form {
          max-width: 400px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }     
        small {
          color: #e74c3c;
          position: absolute;
          bottom: -15px;
          left: 16px;
          visibility: hidden;
        } 
        small.invalid {
          visibility: visible;
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
          small.invalid {
            font-size: 10px;
          } 
        }
      </style>
      <div class="modal__wrapper">
        <div class="modal">
          <div class="modal__form">
            <form id="regForm" class="form">
              <div class="tab">
                <div class="modal__field">
                <label for="date">Дата проведения праздника</label>
                <input id="date" type="date">
                <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="name">ФИО</label>
                  <input id="name" type="text" placeholder="Иванов Иван Иванович">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="phone">Мобильный телефон</label>
                  <input id="phone" type="tel" placeholder="+7 (999) 123-45-67">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="email">E-mail</label>
                  <input id="email" type="email" placeholder="email@email.ru">
                  <small>Error message</small>
                </div>
              </div>

              <div class="tab">
                <div class="modal__field">
                  <label for="count">Количество детей</label>
                  <input id="count" type="number" placeholder="Введите число детей">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="package">Пакетное предложение</label>
                  <select class="package" name="package" id="package">
                    <option value="6606">Базовый (до 10 чел.) - 4700.00 RUB</option>
                    <option value="6608">Премиум (до 10 чел.) - 7900.00 RUB</option>
                  </select>
                </div>
                <p class="package__description">
                  Квест с 1 аниматором -1 час. Аренда банкетной комнаты -1 час. украшение банкетного стола (скатерть, посуда, салфетки).Гелиевые шары-10шт. пригласительные в кино-10шт. Торжественный вынос торта.
                </p>
              </div>
              <div class="modal__buttons">
                <button type="button" class="modal__btn prev-btn">Назад</button>
                <button type="button" class="modal__btn next-btn">Далее</button>

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

/* Multiple steps */
const tabs = document.querySelectorAll('.tab'),
  nextTab = document.querySelector('.next-btn'),
  prevTab = document.querySelector('.prev-btn'),
  username = document.querySelector('input[id="name"]'),
  phone = document.querySelector('input[id="phone"]'),
  email = document.querySelector('input[id="email"]'),
  count = document.getElementById('count') 

let currentTab = 0
tabs[currentTab].style.display = 'block'


/* Remove class invalid focused */
function removeInvalid(el) {
  if(el.classList.contains('invalid')) {
    el.classList.remove('invalid')
    el.nextElementSibling.style.visibility = 'hidden'
  }
}
username.onfocus = () => removeInvalid(username)
phone.onfocus = () => removeInvalid(phone)
email.onfocus = () => removeInvalid(email)
count.onfocus = () => removeInvalid(count)

nextTab.addEventListener('click', () => {
  validateForm()

  let invalidName = username.classList.contains('invalid'),
    invalidClass = tabs[currentTab].querySelector('.invalid')

    if(invalidClass) return

  currentTab++
  
  if(currentTab >= tabs.length) {
    const form = document.getElementById('regForm');
    form.style.display = 'none';
    let processing = document.createElement('span');
    processing.appendChild(document.createTextNode('processing ...'));
    form.parentNode.insertBefore(processing, form);

    redirectMainPage()

    return false
  }
  Array.from(tabs).find(showTab)
  showBtn()
})

function showTab(el, idx) {
  if(idx === currentTab) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}

function showBtn() {
  if(currentTab >= tabs.length - 1) {
    nextTab.innerHTML = 'Отправить'
  } else {
    nextTab.innerHTML = 'Далее'
  }

  currentTab > 0
    ? prevTab.style.display = 'inline'
    : prevTab.style.display = 'none'
}

prevTab.addEventListener('click', () => {
  currentTab--
  if(currentTab < 0) {
    currentTab = 0
    return false
  }
  Array.from(tabs).find(showTab)
  showBtn()
})

function redirectMainPage() {
  let timer = 11
  setInterval(()=> {
    timer--
    document.querySelector('.modal__form').innerHTML = timer
    if(timer === 1) {
      window.location.href = "https://megalandpark.web.app/" 
    }
  }, 1000)
}


function validateForm() {
  let tab = document.getElementsByClassName("tab"),
    currentTabs = tab[currentTab].getElementsByTagName("input")
    valid = true

  const usernameValue = username.value.trim(),
    phoneValue = phone.value.trim(),
    emailValue = email.value.trim(),
    countValue = count.value.trim(),
    containsCount = document.querySelector('input[type="number"]')

  for (i = 0; i < currentTabs.length; i++) {
  if(usernameValue === '') {
    setErrorFor(username, "Введите ФИО")
  } else if(usernameValue.length <= 2) {
    setErrorFor(username, "Слишком короткое ФИО")
  } else if(!validateLnag(usernameValue)) {
    setErrorFor(username, "Введите русские буквы")
  } else {
    setSuccessFor(username)
  }

  if(phoneValue === '') {
    setErrorFor(phone, "Введите номер телефона")
  } else if(phoneValue.length < 18) {
    setErrorFor(phone, "Номер телефона слишком короткий")
  } else {
    setSuccessFor(phone)
  }

  if(emailValue === '') {
    setErrorFor(email, "Введите email")
  } else if(!validateEmail(emailValue)) {
    setErrorFor(email, "Введите правильный email")
  }

  if(countValue === '') {
    setErrorFor(count, "Введите количество детей" )
  }
  }

	
}

function validateLnag(username) {
  return (/^[а-яА-Я]/).test(username)
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  input.className = 'invalid'

  if(input.classList.contains('invalid')) {
    small.className = 'invalid'
    small.innerText = message
    small.style.visibility = 'visible'
  }
}

function setSuccessFor(input) {
  input.className = 'success'
  const smalls = document.querySelectorAll('small')
  smalls.forEach(el => {
    el.classList.remove('invalid')
  })
}





















function minMaxCoun(num) {
  if(num > 30) {
    console.log('f');
  }
}



/* Add phone mask +7(999)123-45-67 */
phone.addEventListener('keydown', function(event) {
  if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
   var mask = '+7 (111) 111-11-11'; // Задаем маску

   if (/[0-9\+\ \-\(\)]/.test(event.key)) {
       // Здесь начинаем сравнивать this.value и mask
       // к примеру опять же
       var currentString = this.value;
       var currentLength = currentString.length;
       if (/[0-9]/.test(event.key)) {
           if (mask[currentLength] == '1') {
               this.value = currentString + event.key;
           } else {
               for (var i=currentLength; i<mask.length; i++) {
              if (mask[i] == '1') {
                  this.value = currentString + event.key;
                  break;
                }
               currentString += mask[i];
               }
           }
       }
   } 
});


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

/***/ "./src/assets/scripts/local/showFullLink/showLinkFull.js":
/*!***************************************************************!*\
  !*** ./src/assets/scripts/local/showFullLink/showLinkFull.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showFullLink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showFullLink.css */ "./src/assets/scripts/local/showFullLink/showFullLink.css");



let links = document.querySelectorAll('.item')

links.forEach(link => {
  link.addEventListener('click', animationElement)
})

function animationElement() { 
  this.style.marginLeft = '0px'
  this.style.marginRight = '0px'

  const ANIMATION_SPEED = '.65s'

  let elemWidth = this.offsetWidth/2,
    elemHeight = this.offsetHeight/2,      
    movingElemX = document.documentElement.clientWidth/2 - (this.getBoundingClientRect().left + elemWidth),
    movingElemY = document.documentElement.clientHeight/2 - (this.getBoundingClientRect().top + elemHeight),
    scaleX = (document.documentElement.clientWidth/2) / (elemWidth),
    scaleY = (document.documentElement.clientHeight/2) / (elemHeight),
    itemPath = this.childNodes[1].getAttribute("href")


  /*Create wrapper on element*/
  let wrap = document.createElement('div') 
  wrap.className = 'start'
  this.before(wrap)     
  
  // Create bg
  setTimeout(() => {
    createBg()

    setTimeout(() => {    
      centerElement(wrap, this, movingElemX, movingElemY, ANIMATION_SPEED)
      
      setTimeout(() => {        
        createClone(this, scaleX, scaleY, ANIMATION_SPEED)
        
        setTimeout(() => {
          showItem(this, movingElemX)
        }, 1000);
      }, 100)      
    }, 0)
  }, 0)  

  this.style.borderRadius = '0px' 
} 

function createBg() {
  let backgroundWrap = document.createElement('div')
  backgroundWrap.className = 'empty'      
  document.body.append(backgroundWrap)
  backgroundWrap.className += ' filter'
}

function centerElement(wrap, el, movingElemX, movingElemY, ANIMATION_SPEED) {
  wrap.style.transitionDuration = ANIMATION_SPEED
  wrap.style.transitionProperty = 'left, top'
  wrap.style.width = el.clientWidth + 'px'
  el.style.position = 'relative'
  wrap.append(el)
  wrap.style.left = movingElemX + 'px'
  wrap.style.top = movingElemY + 'px'
}

function createClone(el, scaleX, scaleY, ANIMATION_SPEED) {
  let cloneHeight = window.getComputedStyle(el).getPropertyValue('height'),
    cloneWidth = window.getComputedStyle(el).getPropertyValue('width'),
    clone = document.createElement('div')

  clone.style.width = cloneWidth
  clone.style.height = cloneHeight
  clone.style.backgroundColor = '#ccc'
  clone.style.position = 'absolute'
  clone.style.zIndex = '1'
  el.before(clone)

  setTimeout(() => {
    coverClone(clone, scaleX, scaleY, ANIMATION_SPEED)
  }, 100)  
}

function coverClone(el, scaleX, scaleY, ANIMATION_SPEED) {
  el.style.transitionDuration = ANIMATION_SPEED
  el.style.transitionProperty = 'transform'
  el.style.transform = `scale(${scaleX}, ${scaleY})`
}

function showItem(el, movingElemX) {

 let winItem = `
 <div class="item__wrapper">
    <div class="item">
        <img src="/src/assets/images/item1-1.webp" alt="" loading="lazy" width="460" height="460">
        <div class="item__description">
            <h1 class="item__title">Безлимит в Мегалэнде</h1>
            <p>
                За 590 руб. в будни можно играть сколько хочешь на любых площадках.
            </p>
            <p>В акции участвуют:</p>
            <ul>
                <li>
                    <i class="fas fa-check"></i>
                    Батут Надувная Горка
                </li>
                <li>
                    <i class="fas fa-check"></i>
                    Батутный парк
                </li>
                <li>
                    <i class="fas fa-check"></i>
                    Лабиринт
                </li>
                <li>
                    <i class="fas fa-check"></i>
                    Детский сад
                </li>
                <li>
                    <i class="fas fa-check"></i>
                    Экстрим парк
                </li>
            </ul>
            <small>
                *Акция не распространяется на игровые автоматы. Действуют ограничения по росту и возрасту. Акция не действует в выходные.
            </small>
            <br>    
            <a href="tel:83435379797">тел. : 37-97-97</a>
            <br>
            <small class="item__date">
                <time datetime="2021-04-15 11:00">
                    15.04.2021 11:10
                </time>
            </small>
        </div>
    </div>
  </div>
 ` 
 __webpack_require__.e(/*! import() */ "src_assets_scripts_local_item-win_css").then(__webpack_require__.bind(__webpack_require__, /*! ../item-win.css */ "./src/assets/scripts/local/item-win.css"))

 el.innerHTML = winItem
//  el.style.top = -movingElemX + 'px'
//  console.log(-movingElemX);
}


    
  

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

function loadScript(src) {
  return new Promise(function (resolve, reject) {
      var s;
      s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
  });
}

/***/ }),

/***/ "./src/assets/scripts/local/ya-maps.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/local/ya-maps.js ***!
  \*********************************************/
/***/ (() => {

  function loadMaps() {
    setTimeout(() => {
        const script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39b19df971b7bfaaafe81f4d102954799a6bca83d1a5ee5f21154437236016e6&amp;width=auto&amp;height=460&amp;lang=ru_RU&amp;srcoll=true";
        script.async = true;
        let divMaps = document.querySelector('.contacts-map')
        divMaps.append(script)
    }, 1000);
  }  

  window.addEventListener('load', loadMaps())

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
/******/ 			return "" + chunkId + "." + {"src_assets_scripts_local_item-header_js":"a09c46eabeb1a6de9fd0","src_assets_scripts_local_items_css":"0c43c2ed1c7db9efb783","src_assets_scripts_local_item-win_css":"d88ad765ae476ad17602"}[chunkId] + ".js";
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
/******/ 			var cssChunks = {"src_assets_scripts_local_item-header_js":1,"src_assets_scripts_local_items_css":1,"src_assets_scripts_local_item-win_css":1};
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
/* Path css/js to items */
const patHome = () => {
  if(window.location.pathname === "/") {
    __webpack_require__(/*! ./style.css */ "./src/assets/scripts/local/style.css") 
    __webpack_require__(/*! ./animation/animation.css */ "./src/assets/scripts/local/animation/animation.css") 
    __webpack_require__(/*! ./footer.js */ "./src/assets/scripts/local/footer.js") 
    __webpack_require__(/*! ./menu-nav */ "./src/assets/scripts/local/menu-nav.js") 
    __webpack_require__(/*! ./modal-window.js */ "./src/assets/scripts/local/modal-window.js") 
    __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css") 
    __webpack_require__(/*! ./touch-slider.js */ "./src/assets/scripts/local/touch-slider.js") 
    __webpack_require__(/*! ./ya-maps.js */ "./src/assets/scripts/local/ya-maps.js") 
    __webpack_require__(/*! ./animation//animation */ "./src/assets/scripts/local/animation/animation.js")
    __webpack_require__(/*! ./showFullLink/showLinkFull */ "./src/assets/scripts/local/showFullLink/showLinkFull.js")
    __webpack_require__(/*! ./lazyLoadImg */ "./src/assets/scripts/local/lazyLoadImg.js")
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYW5pbWF0aW9uL2FuaW1hdGlvbi5jc3M/NGJhNyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL29yZGVyLmNzcz9jMGM3Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvc2hvd0Z1bGxMaW5rL3Nob3dGdWxsTGluay5jc3M/ZWNjMyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3N0eWxlLmNzcz84NjQ2Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2xhenlMb2FkSW1nLmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbWVudS1uYXYuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9vcmRlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3Nob3dGdWxsTGluay9zaG93TGlua0Z1bGwuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC90b3VjaC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC95YS1tYXBzLmpzIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQSwrRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDO0FBQ0E7QUFDQTtBQUNBLGlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25WQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isd0JBQXdCLDZCQUE2QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGlDQUFpQyxHQUFHO0FBQ2hLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxtSEFBbUg7QUFDbkgsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNyZUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ3ZEMEI7OztBQUczQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQjtBQUNBOztBQUVBLHdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU8sSUFBSSxPQUFPO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9NQUF5Qjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsaUJBQWlCO0FBQ25FO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7OztBQ25QQTtBQUNBO0FBQ0E7QUFDQSxvS0FBb0ssZUFBZSxlQUFlLGVBQWU7QUFDak47QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEc7O0FBRUEsNkM7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsNExBQTRMO1dBQzFOLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsNEJBQTRCLFFBQVE7V0FDMUQ7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLG9CQUFvQjtXQUNwQztXQUNBLGtHQUFrRyxZQUFZLE9BQU87V0FDckg7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0VBQWtFLGtDQUFrQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NmQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSw2QkFBNkI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsOEJBQThCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQjtXQUNsQjtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUEsUzs7Ozs7V0NuRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQzs7V0FFaEM7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLGNBQWM7V0FDZDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLDRHOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMscUZBQTJCO0FBQ3ZDLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMsMERBQVk7QUFDeEIsSUFBSSxtQkFBTyxDQUFDLHFFQUFtQjtBQUMvQixJQUFJLG1CQUFPLENBQUMsbUhBQStDO0FBQzNELElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLDJEQUFjO0FBQzFCLElBQUksbUJBQU8sQ0FBQyxpRkFBd0I7QUFDcEMsSUFBSSxtQkFBTyxDQUFDLDRGQUE2QjtBQUN6QyxJQUFJLG1CQUFPLENBQUMsZ0VBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMsMERBQVk7QUFDeEIsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCLElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLHVEQUFZO0FBQ3hCO0FBQ0EsQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlNQUEwQjtBQUM5QixJQUFJLDBMQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5jYjYxZTA5NjlhNWMxZTc3NDU2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1saW5rJylcclxuXHJcbmxldCBzY3JlZW5Qb3NpdGlvblNob3cgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMS4yXHJcbmxldCBzY3JlZW5Qb3NpdGlvblJlbW92ZSA9IHdpbmRvdy5pbm5lckhlaWdodC82XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBzaG93RWxlbUFuaW1hdGlvbihsaW5rLCBzY3JlZW5Qb3NpdGlvblNob3csICdhY3RpdmUnKVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlRWxlbUFuaW1hdGlvbihsaW5rLCBzY3JlZW5Qb3NpdGlvblJlbW92ZSwgJ2FjdGl2ZScpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzaG93RWxlbUFuaW1hdGlvbihlbGVtZW4sIHNjcmVlblBvc2l0aW9uU2hvdywgY2xhc3NDc3MpIHtcclxuICAgIGlmKGVsZW1lbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBzY3JlZW5Qb3NpdGlvblNob3cpIHsgXHJcbiAgICBlbGVtZW4uY2xhc3NMaXN0LmFkZChjbGFzc0NzcykgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUVsZW1BbmltYXRpb24oZWxlbWVuLCBzY3JlZW5Qb3NpdGlvblJlbW92ZSwgY2xhc3NDc3MpIHtcclxuICAgIGlmKGVsZW1lbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCBzY3JlZW5Qb3NpdGlvblJlbW92ZSkge1xyXG4gICAgZWxlbWVuLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NDc3MpIFxyXG4gICAgfVxyXG59ICIsImNsYXNzIEZvb3RlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjEzNDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXJfX2lubmVyIHtcclxuICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXJfX2xvZ28ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXJfX2Rlc2NyaXB0aW9uLCAuZm9vdGVyX19mZWVkYmFjayB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2Q2ZDZkNjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19pbm5lclwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cImZvb3Rlcl9fbG9nb1wiIHNyYz1cIjI1YjQyNmZiNzY2OGRkZTNhYmVmLnBuZ1wiIGFsdD1cItCb0L7Qs9C+0YLQuNC/INCc0LXQs9Cw0LvQtdC90LRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIMKpINCl0L7Qu9C00LjQvdCzIMKr0JzQtdCz0LDQv9C+0LvQuNGBwrssIDIwMDkg4oCUIDIwMjAgPGJyPlxyXG4gICAgICAgICAgICDQo9GB0LvQvtCy0LjRjyDQtNC+0LPQvtCy0L7RgNCwINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0YsgKNC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLRjCDQuCDQt9Cw0YnQuNGC0LAg0L/QtdGA0YHQvtC90LDQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4KSA8YnI+XHJcbiAgICAgICAgICAgINCf0YDQsNCy0LjQu9CwINC/0L7RgdC10YnQtdC90LjRjyA8YnI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZm9vdGVyX19mZWVkYmFja1wiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2Q2WmVaQjNsNW1RT3NkdWIwM09UUUxkU2JKclVtRUNfdmN3WVBxcmlQc2xnTDR0Zy92aWV3Zm9ybT9lbnRyeS42MzI2NDA5Nzg9JUQwJTlEJUQwJUI4JUQwJUI2JUQwJUJEJUQwJUI4JUQwJUI5KyVEMCVBMiVEMCVCMCVEMCVCMyVEMCVCOCVEMCVCQlwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPtCe0YHRgtCw0LLQuNGC0Ywg0L7RgtC30YvQsjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZm9vdGVyLWNvbXBvbmVudCcsIEZvb3RlcilcclxuXHJcbiIsImxldCBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuaW1ncy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgaWYoIWkubG9hZGluZykge1xyXG4gICAgICAgIGkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnXHJcbiAgICB9XHJcbn0pIiwiY2xhc3MgTWVudU5hdiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIGxldCBjaXJjbGVXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjIyICsgJ3B4J1xyXG5cclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIzZTQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJfX21lbnUtYmcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyX19tZW51LWJnLS1hY3RpdmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1heC13aWR0aDogMTM1MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0LCAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQtLWFjdGl2ZSwgLm1lbnVfX3JpZ2h0LS1hY3RpdmUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgIG9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0LCBcclxuICAgICAgICAgICAgdHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAuMzIsIDEuMik7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuN3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC45cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4zcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdCB7XHJcbiAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgIHdpZHRoOiA0ODVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgd2lkdGg6IDIyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbSBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U1ZmZmZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMzBweCA5cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X190b2dnbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjcwcHgpIHtcclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoJHtjaXJjbGVXaWR0aH0gYXQgdG9wIHJpZ2h0KTtcclxuICAgICAgICAgICAgaGVpZ3RoOiAxMDAlO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIC5oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDczMHB4IGF0IGNlbnRlcik7XHJcbiAgICAgICAgICAgIGhlaWd0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDY1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51LS1hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19idG4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgLnRvZ2dsZV9fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICAgIG9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0LCBcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIC4zMiwgMS4yKTsgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC43cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjlzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4ycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fbGVmdCB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnUtYmdcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCdLtCi0LDQs9C40Ls8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0J/QsNGA0Lo8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JrQsNGE0LU8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JTQtdC90Ywg0YDQvtC20LTQtdC90LjRjzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QnNC10YDQvtC/0YDQuNGP0YLQuNGPPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVfX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCQ0LrRhtC40Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0KbQtdC90Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JrQvtC90YLQsNC60YLRizwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYmFhMmI0NWQ3YzliZWQ0YTI3NWYucG5nXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgdHlwZT1cImFcIiBjbGFzcz1cIm1lbnVfX2J0blwiPtCX0LDQutCw0LfQsNGC0Ywg0L/RgNCw0LfQtNC90LjQujwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZ2dsZV9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZW51X190b2dnbGVcIj7QnNC10L3RjjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ25hdi1jb21wb25lbnQnLCBNZW51TmF2KVxyXG5cclxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlX193cmFwcGVyJylcclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKVxyXG5sZXQgbWVudUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGVmdCcpXHJcbmxldCBtZW51TGVmdExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKVxyXG5sZXQgbWVudVJpZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3JpZ2h0JylcclxubGV0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190b2dnbGUnKVxyXG5cclxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tYWN0aXZlJylcclxuICBtZW51TGVmdC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19sZWZ0LS1hY3RpdmUnKVxyXG4gIG1lbnVSaWd0aC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19yaWdodC0tYWN0aXZlJylcclxuICB0b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fdG9nZ2xlLS1hY3RpdmUnKVxyXG4gIG1lbnVMZWZ0TGkuZm9yRWFjaChlbGVtID0+IHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9faXRlbS0tYWN0aXZlJylcclxuICB9KVxyXG59XHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIE1vZGFsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAudGFiIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgaW5wdXQuaW52YWxpZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzQsIDIzNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fd3JhcHBlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2Zvcm0ge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZDpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCBsYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2ZpZWxkIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idXR0b25zIHtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCAubmV4dC1idG4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OTBkYztcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwgLnByZXYtYnRuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0bi1jbG9zZSB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J0bi1jbG9zZSBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNzM7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgLnBhY2thZ2Uge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTVweDtcclxuICAgICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfSBcclxuICAgICAgICBzbWFsbC5pbnZhbGlkIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAubW9kYWxfX2Zvcm0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAubW9kYWxfX2Zvcm0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDg1dnc7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNtYWxsLmludmFsaWQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX193cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2Zvcm1cIj5cclxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJyZWdGb3JtXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj7QlNCw0YLQsCDQv9GA0L7QstC10LTQtdC90LjRjyDQv9GA0LDQt9C00L3QuNC60LA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj7QpNCY0J48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCY0LLQsNC90L7QsiDQmNCy0LDQvSDQmNCy0LDQvdC+0LLQuNGHXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj7QnNC+0LHQuNC70YzQvdGL0Lkg0YLQtdC70LXRhNC+0L08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwaG9uZVwiIHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj1cIis3ICg5OTkpIDEyMy00NS02N1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsQGVtYWlsLnJ1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VudFwiPtCa0L7Qu9C40YfQtdGB0YLQstC+INC00LXRgtC10Lk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb3VudFwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INGH0LjRgdC70L4g0LTQtdGC0LXQuVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhY2thZ2VcIj7Qn9Cw0LrQtdGC0L3QvtC1INC/0YDQtdC00LvQvtC20LXQvdC40LU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicGFja2FnZVwiIG5hbWU9XCJwYWNrYWdlXCIgaWQ9XCJwYWNrYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjY2MDZcIj7QkdCw0LfQvtCy0YvQuSAo0LTQviAxMCDRh9C10LsuKSAtIDQ3MDAuMDAgUlVCPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjY2MDhcIj7Qn9GA0LXQvNC40YPQvCAo0LTQviAxMCDRh9C10LsuKSAtIDc5MDAuMDAgUlVCPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBhY2thZ2VfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgINCa0LLQtdGB0YIg0YEgMSDQsNC90LjQvNCw0YLQvtGA0L7QvCAtMSDRh9Cw0YEuINCQ0YDQtdC90LTQsCDQsdCw0L3QutC10YLQvdC+0Lkg0LrQvtC80L3QsNGC0YsgLTEg0YfQsNGBLiDRg9C60YDQsNGI0LXQvdC40LUg0LHQsNC90LrQtdGC0L3QvtCz0L4g0YHRgtC+0LvQsCAo0YHQutCw0YLQtdGA0YLRjCwg0L/QvtGB0YPQtNCwLCDRgdCw0LvRhNC10YLQutC4KS7Qk9C10LvQuNC10LLRi9C1INGI0LDRgNGLLTEw0YjRgi4g0L/RgNC40LPQu9Cw0YHQuNGC0LXQu9GM0L3Ri9C1INCyINC60LjQvdC+LTEw0YjRgi4g0KLQvtGA0LbQtdGB0YLQstC10L3QvdGL0Lkg0LLRi9C90L7RgSDRgtC+0YDRgtCwLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtb2RhbF9fYnRuIHByZXYtYnRuXCI+0J3QsNC30LDQtDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtb2RhbF9fYnRuIG5leHQtYnRuXCI+0JTQsNC70LXQtTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtbW9kYWwtYnRuXCIgY2xhc3M9XCJtb2RhbF9fYnRuLWNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtd2luZG93LWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtb2RhbC1jb21wb25lbnQnLCBNb2RhbClcclxuXHJcbi8qIE9wZW4gbW9kYWwgKi9cclxubGV0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJylcclxuXHJcbm5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcblxyXG4vKiBDbG9zZSBtb2RhbCB3aW5kb3cgKi9cclxubGV0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtbW9kYWwtYnRuJylcclxubGV0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX193cmFwcGVyJylcclxuY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoZXZlbnQpIHtcclxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWVcclxuXHJcbiAgaWYodGFyZ2V0ICE9ICdCVVRUT04nKSByZXR1cm5cclxuICBcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSkge1xyXG4gICAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIH1cclxufSlcclxuXHJcbi8qIEN1cnJlbnQgZGF0ZSAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKVxyXG5cclxuLyogTXVsdGlwbGUgc3RlcHMgKi9cclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKSxcclxuICBuZXh0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtYnRuJyksXHJcbiAgcHJldlRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2LWJ0bicpLFxyXG4gIHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJuYW1lXCJdJyksXHJcbiAgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInBob25lXCJdJyksXHJcbiAgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImVtYWlsXCJdJyksXHJcbiAgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKSBcclxuXHJcbmxldCBjdXJyZW50VGFiID0gMFxyXG50YWJzW2N1cnJlbnRUYWJdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcblxyXG5cclxuLyogUmVtb3ZlIGNsYXNzIGludmFsaWQgZm9jdXNlZCAqL1xyXG5mdW5jdGlvbiByZW1vdmVJbnZhbGlkKGVsKSB7XHJcbiAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJykpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKVxyXG4gICAgZWwubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gIH1cclxufVxyXG51c2VybmFtZS5vbmZvY3VzID0gKCkgPT4gcmVtb3ZlSW52YWxpZCh1c2VybmFtZSlcclxucGhvbmUub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQocGhvbmUpXHJcbmVtYWlsLm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKGVtYWlsKVxyXG5jb3VudC5vbmZvY3VzID0gKCkgPT4gcmVtb3ZlSW52YWxpZChjb3VudClcclxuXHJcbm5leHRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgdmFsaWRhdGVGb3JtKClcclxuXHJcbiAgbGV0IGludmFsaWROYW1lID0gdXNlcm5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJyksXHJcbiAgICBpbnZhbGlkQ2xhc3MgPSB0YWJzW2N1cnJlbnRUYWJdLnF1ZXJ5U2VsZWN0b3IoJy5pbnZhbGlkJylcclxuXHJcbiAgICBpZihpbnZhbGlkQ2xhc3MpIHJldHVyblxyXG5cclxuICBjdXJyZW50VGFiKytcclxuICBcclxuICBpZihjdXJyZW50VGFiID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ0Zvcm0nKTtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGxldCBwcm9jZXNzaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvY2Vzc2luZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgncHJvY2Vzc2luZyAuLi4nKSk7XHJcbiAgICBmb3JtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHByb2Nlc3NpbmcsIGZvcm0pO1xyXG5cclxuICAgIHJlZGlyZWN0TWFpblBhZ2UoKVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBBcnJheS5mcm9tKHRhYnMpLmZpbmQoc2hvd1RhYilcclxuICBzaG93QnRuKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIHNob3dUYWIoZWwsIGlkeCkge1xyXG4gIGlmKGlkeCA9PT0gY3VycmVudFRhYikge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICB9IGVsc2Uge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0J0bigpIHtcclxuICBpZihjdXJyZW50VGFiID49IHRhYnMubGVuZ3RoIC0gMSkge1xyXG4gICAgbmV4dFRhYi5pbm5lckhUTUwgPSAn0J7RgtC/0YDQsNCy0LjRgtGMJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuZXh0VGFiLmlubmVySFRNTCA9ICfQlNCw0LvQtdC1J1xyXG4gIH1cclxuXHJcbiAgY3VycmVudFRhYiA+IDBcclxuICAgID8gcHJldlRhYi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcclxuICAgIDogcHJldlRhYi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn1cclxuXHJcbnByZXZUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY3VycmVudFRhYi0tXHJcbiAgaWYoY3VycmVudFRhYiA8IDApIHtcclxuICAgIGN1cnJlbnRUYWIgPSAwXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgQXJyYXkuZnJvbSh0YWJzKS5maW5kKHNob3dUYWIpXHJcbiAgc2hvd0J0bigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiByZWRpcmVjdE1haW5QYWdlKCkge1xyXG4gIGxldCB0aW1lciA9IDExXHJcbiAgc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICB0aW1lci0tXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Zvcm0nKS5pbm5lckhUTUwgPSB0aW1lclxyXG4gICAgaWYodGltZXIgPT09IDEpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vbWVnYWxhbmRwYXJrLndlYi5hcHAvXCIgXHJcbiAgICB9XHJcbiAgfSwgMTAwMClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICBsZXQgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYlwiKSxcclxuICAgIGN1cnJlbnRUYWJzID0gdGFiW2N1cnJlbnRUYWJdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilcclxuICAgIHZhbGlkID0gdHJ1ZVxyXG5cclxuICBjb25zdCB1c2VybmFtZVZhbHVlID0gdXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgcGhvbmVWYWx1ZSA9IHBob25lLnZhbHVlLnRyaW0oKSxcclxuICAgIGVtYWlsVmFsdWUgPSBlbWFpbC52YWx1ZS50cmltKCksXHJcbiAgICBjb3VudFZhbHVlID0gY291bnQudmFsdWUudHJpbSgpLFxyXG4gICAgY29udGFpbnNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgY3VycmVudFRhYnMubGVuZ3RoOyBpKyspIHtcclxuICBpZih1c2VybmFtZVZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IodXNlcm5hbWUsIFwi0JLQstC10LTQuNGC0LUg0KTQmNCeXCIpXHJcbiAgfSBlbHNlIGlmKHVzZXJuYW1lVmFsdWUubGVuZ3RoIDw9IDIpIHtcclxuICAgIHNldEVycm9yRm9yKHVzZXJuYW1lLCBcItCh0LvQuNGI0LrQvtC8INC60L7RgNC+0YLQutC+0LUg0KTQmNCeXCIpXHJcbiAgfSBlbHNlIGlmKCF2YWxpZGF0ZUxuYWcodXNlcm5hbWVWYWx1ZSkpIHtcclxuICAgIHNldEVycm9yRm9yKHVzZXJuYW1lLCBcItCS0LLQtdC00LjRgtC1INGA0YPRgdGB0LrQuNC1INCx0YPQutCy0YtcIilcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0U3VjY2Vzc0Zvcih1c2VybmFtZSlcclxuICB9XHJcblxyXG4gIGlmKHBob25lVmFsdWUgPT09ICcnKSB7XHJcbiAgICBzZXRFcnJvckZvcihwaG9uZSwgXCLQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIilcclxuICB9IGVsc2UgaWYocGhvbmVWYWx1ZS5sZW5ndGggPCAxOCkge1xyXG4gICAgc2V0RXJyb3JGb3IocGhvbmUsIFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINGB0LvQuNGI0LrQvtC8INC60L7RgNC+0YLQutC40LlcIilcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0U3VjY2Vzc0ZvcihwaG9uZSlcclxuICB9XHJcblxyXG4gIGlmKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcbiAgICBzZXRFcnJvckZvcihlbWFpbCwgXCLQktCy0LXQtNC40YLQtSBlbWFpbFwiKVxyXG4gIH0gZWxzZSBpZighdmFsaWRhdGVFbWFpbChlbWFpbFZhbHVlKSkge1xyXG4gICAgc2V0RXJyb3JGb3IoZW1haWwsIFwi0JLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWxcIilcclxuICB9XHJcblxyXG4gIGlmKGNvdW50VmFsdWUgPT09ICcnKSB7XHJcbiAgICBzZXRFcnJvckZvcihjb3VudCwgXCLQktCy0LXQtNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC10YLQtdC5XCIgKVxyXG4gIH1cclxuICB9XHJcblxyXG5cdFxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUxuYWcodXNlcm5hbWUpIHtcclxuICByZXR1cm4gKC9eW9CwLdGP0JAt0K9dLykudGVzdCh1c2VybmFtZSlcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xyXG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXHJcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yRm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcbiAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gIGNvbnN0IHNtYWxsID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3Rvcignc21hbGwnKVxyXG4gIGlucHV0LmNsYXNzTmFtZSA9ICdpbnZhbGlkJ1xyXG5cclxuICBpZihpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSkge1xyXG4gICAgc21hbGwuY2xhc3NOYW1lID0gJ2ludmFsaWQnXHJcbiAgICBzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlXHJcbiAgICBzbWFsbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdWNjZXNzRm9yKGlucHV0KSB7XHJcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MnXHJcbiAgY29uc3Qgc21hbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc21hbGwnKVxyXG4gIHNtYWxscy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWluTWF4Q291bihudW0pIHtcclxuICBpZihudW0gPiAzMCkge1xyXG4gICAgY29uc29sZS5sb2coJ2YnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogQWRkIHBob25lIG1hc2sgKzcoOTk5KTEyMy00NS02NyAqL1xyXG5waG9uZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICBpZiggIShldmVudC5rZXkgPT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09ICdBcnJvd1JpZ2h0JyB8fCBldmVudC5rZXkgPT0gJ0JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09ICdUYWInKSkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH1cclxuICAgdmFyIG1hc2sgPSAnKzcgKDExMSkgMTExLTExLTExJzsgLy8g0JfQsNC00LDQtdC8INC80LDRgdC60YNcclxuXHJcbiAgIGlmICgvWzAtOVxcK1xcIFxcLVxcKFxcKV0vLnRlc3QoZXZlbnQua2V5KSkge1xyXG4gICAgICAgLy8g0JfQtNC10YHRjCDQvdCw0YfQuNC90LDQtdC8INGB0YDQsNCy0L3QuNCy0LDRgtGMIHRoaXMudmFsdWUg0LggbWFza1xyXG4gICAgICAgLy8g0Log0L/RgNC40LzQtdGA0YMg0L7Qv9GP0YLRjCDQttC1XHJcbiAgICAgICB2YXIgY3VycmVudFN0cmluZyA9IHRoaXMudmFsdWU7XHJcbiAgICAgICB2YXIgY3VycmVudExlbmd0aCA9IGN1cnJlbnRTdHJpbmcubGVuZ3RoO1xyXG4gICAgICAgaWYgKC9bMC05XS8udGVzdChldmVudC5rZXkpKSB7XHJcbiAgICAgICAgICAgaWYgKG1hc2tbY3VycmVudExlbmd0aF0gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBjdXJyZW50U3RyaW5nICsgZXZlbnQua2V5O1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGZvciAodmFyIGk9Y3VycmVudExlbmd0aDsgaTxtYXNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG1hc2tbaV0gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBjdXJyZW50U3RyaW5nICsgZXZlbnQua2V5O1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyArPSBtYXNrW2ldO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICB9IFxyXG59KTtcclxuIiwiLyogU2hvdyBpdGVtIGJ0biAqL1xyXG5sZXQgc2hvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWJ0bicpXHJcbmxldCBjYXJkSGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3dyYXBwZXInKVxyXG5cclxuZnVuY3Rpb24gc2hvd0l0ZW0oKSB7XHJcbiAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgY2FyZEhpZGRlbi5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkLS1oaWRkZW4nKVxyXG59XHJcblxyXG5zaG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0l0ZW0pXHJcblxyXG4vLyAvKiBDdXJyZW50IGRhdGUgKi9cclxuLy8gbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbi8vIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xyXG5cclxuLy8gZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbi8vICAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKClcclxuLy8gICBpZiAoZGQgPCAxMCkgZGQgPSAnMCcgKyBkZFxyXG5cclxuLy8gICBsZXQgTU0gPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbi8vICAgaWYgKE1NIDwgMTApIE1NID0gJzAnICsgTU1cclxuXHJcbi8vICAgbGV0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuLy8gICBpZiAoeXl5eSA8IDEwKSB5eXl5ID0gJzAnICsgeXl5eVxyXG5cclxuLy8gICByZXR1cm4geXl5eSArICctJyArIE1NICsgJy0nICsgZGRcclxuLy8gfVxyXG5cclxuLy8gbGV0IGN1cnJlbnREYXRlID0gZm9ybWF0RGF0ZShkYXRlKVxyXG4vLyBkYXRlSW5wdXQudmFsdWUgPSBjdXJyZW50RGF0ZVxyXG5cclxuaW1wb3J0ICcuL29yZGVyLmNzcydcclxuXHJcbi8qIE9wZW4gbW9kYWwgKi9cclxubGV0IG9mZmVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZXJzX19saXN0JylcclxubGV0IHBob25lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG9uZScpXHJcbmxldCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcbmxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fd3JhcHBlcicpXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKGV2ZW50KSB7XHJcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC50YWdOYW1lXHJcblxyXG4gIGlmKHRhcmdldCAhPSAnQlVUVE9OJykgcmV0dXJuXHJcbiAgXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufVxyXG5cclxub2ZmZXJzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxubmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcblxyXG5waG9uZVNlY3Rpb24uZm9yRWFjaChlbCA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbn0pIiwiaW1wb3J0ICcuL3Nob3dGdWxsTGluay5jc3MnXHJcblxyXG5cclxubGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKVxyXG5cclxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYW5pbWF0aW9uRWxlbWVudClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvbkVsZW1lbnQoKSB7IFxyXG4gIHRoaXMuc3R5bGUubWFyZ2luTGVmdCA9ICcwcHgnXHJcbiAgdGhpcy5zdHlsZS5tYXJnaW5SaWdodCA9ICcwcHgnXHJcblxyXG4gIGNvbnN0IEFOSU1BVElPTl9TUEVFRCA9ICcuNjVzJ1xyXG5cclxuICBsZXQgZWxlbVdpZHRoID0gdGhpcy5vZmZzZXRXaWR0aC8yLFxyXG4gICAgZWxlbUhlaWdodCA9IHRoaXMub2Zmc2V0SGVpZ2h0LzIsICAgICAgXHJcbiAgICBtb3ZpbmdFbGVtWCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC8yIC0gKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIGVsZW1XaWR0aCksXHJcbiAgICBtb3ZpbmdFbGVtWSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQvMiAtICh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGVsZW1IZWlnaHQpLFxyXG4gICAgc2NhbGVYID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aC8yKSAvIChlbGVtV2lkdGgpLFxyXG4gICAgc2NhbGVZID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQvMikgLyAoZWxlbUhlaWdodCksXHJcbiAgICBpdGVtUGF0aCA9IHRoaXMuY2hpbGROb2Rlc1sxXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXHJcblxyXG5cclxuICAvKkNyZWF0ZSB3cmFwcGVyIG9uIGVsZW1lbnQqL1xyXG4gIGxldCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXHJcbiAgd3JhcC5jbGFzc05hbWUgPSAnc3RhcnQnXHJcbiAgdGhpcy5iZWZvcmUod3JhcCkgICAgIFxyXG4gIFxyXG4gIC8vIENyZWF0ZSBiZ1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY3JlYXRlQmcoKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICBcclxuICAgICAgY2VudGVyRWxlbWVudCh3cmFwLCB0aGlzLCBtb3ZpbmdFbGVtWCwgbW92aW5nRWxlbVksIEFOSU1BVElPTl9TUEVFRClcclxuICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlQ2xvbmUodGhpcywgc2NhbGVYLCBzY2FsZVksIEFOSU1BVElPTl9TUEVFRClcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNob3dJdGVtKHRoaXMsIG1vdmluZ0VsZW1YKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9LCAxMDApICAgICAgXHJcbiAgICB9LCAwKVxyXG4gIH0sIDApICBcclxuXHJcbiAgdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMHB4JyBcclxufSBcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJnKCkge1xyXG4gIGxldCBiYWNrZ3JvdW5kV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgYmFja2dyb3VuZFdyYXAuY2xhc3NOYW1lID0gJ2VtcHR5JyAgICAgIFxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhY2tncm91bmRXcmFwKVxyXG4gIGJhY2tncm91bmRXcmFwLmNsYXNzTmFtZSArPSAnIGZpbHRlcidcclxufVxyXG5cclxuZnVuY3Rpb24gY2VudGVyRWxlbWVudCh3cmFwLCBlbCwgbW92aW5nRWxlbVgsIG1vdmluZ0VsZW1ZLCBBTklNQVRJT05fU1BFRUQpIHtcclxuICB3cmFwLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IEFOSU1BVElPTl9TUEVFRFxyXG4gIHdyYXAuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2xlZnQsIHRvcCdcclxuICB3cmFwLnN0eWxlLndpZHRoID0gZWwuY2xpZW50V2lkdGggKyAncHgnXHJcbiAgZWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgd3JhcC5hcHBlbmQoZWwpXHJcbiAgd3JhcC5zdHlsZS5sZWZ0ID0gbW92aW5nRWxlbVggKyAncHgnXHJcbiAgd3JhcC5zdHlsZS50b3AgPSBtb3ZpbmdFbGVtWSArICdweCdcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2xvbmUoZWwsIHNjYWxlWCwgc2NhbGVZLCBBTklNQVRJT05fU1BFRUQpIHtcclxuICBsZXQgY2xvbmVIZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JyksXHJcbiAgICBjbG9uZVdpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyksXHJcbiAgICBjbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gIGNsb25lLnN0eWxlLndpZHRoID0gY2xvbmVXaWR0aFxyXG4gIGNsb25lLnN0eWxlLmhlaWdodCA9IGNsb25lSGVpZ2h0XHJcbiAgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnXHJcbiAgY2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgY2xvbmUuc3R5bGUuekluZGV4ID0gJzEnXHJcbiAgZWwuYmVmb3JlKGNsb25lKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNvdmVyQ2xvbmUoY2xvbmUsIHNjYWxlWCwgc2NhbGVZLCBBTklNQVRJT05fU1BFRUQpXHJcbiAgfSwgMTAwKSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdmVyQ2xvbmUoZWwsIHNjYWxlWCwgc2NhbGVZLCBBTklNQVRJT05fU1BFRUQpIHtcclxuICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBBTklNQVRJT05fU1BFRURcclxuICBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xyXG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlWH0sICR7c2NhbGVZfSlgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtKGVsLCBtb3ZpbmdFbGVtWCkge1xyXG5cclxuIGxldCB3aW5JdGVtID0gYFxyXG4gPGRpdiBjbGFzcz1cIml0ZW1fX3dyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3JjL2Fzc2V0cy9pbWFnZXMvaXRlbTEtMS53ZWJwXCIgYWx0PVwiXCIgbG9hZGluZz1cImxhenlcIiB3aWR0aD1cIjQ2MFwiIGhlaWdodD1cIjQ2MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJpdGVtX190aXRsZVwiPtCR0LXQt9C70LjQvNC40YIg0LIg0JzQtdCz0LDQu9GN0L3QtNC1PC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICDQl9CwIDU5MCDRgNGD0LEuINCyINCx0YPQtNC90Lgg0LzQvtC20L3QviDQuNCz0YDQsNGC0Ywg0YHQutC+0LvRjNC60L4g0YXQvtGH0LXRiNGMINC90LAg0LvRjtCx0YvRhSDQv9C70L7RidCw0LTQutCw0YUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0JIg0LDQutGG0LjQuCDRg9GH0LDRgdGC0LLRg9GO0YI6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAg0JHQsNGC0YPRgiDQndCw0LTRg9Cy0L3QsNGPINCT0L7RgNC60LBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAg0JHQsNGC0YPRgtC90YvQuSDQv9Cw0YDQulxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICDQm9Cw0LHQuNGA0LjQvdGCXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgINCU0LXRgtGB0LrQuNC5INGB0LDQtFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICDQrdC60YHRgtGA0LjQvCDQv9Cw0YDQulxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgKtCQ0LrRhtC40Y8g0L3QtSDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90Y/QtdGC0YHRjyDQvdCwINC40LPRgNC+0LLRi9C1INCw0LLRgtC+0LzQsNGC0YsuINCU0LXQudGB0YLQstGD0Y7RgiDQvtCz0YDQsNC90LjRh9C10L3QuNGPINC/0L4g0YDQvtGB0YLRgyDQuCDQstC+0LfRgNCw0YHRgtGDLiDQkNC60YbQuNGPINC90LUg0LTQtdC50YHRgtCy0YPQtdGCINCyINCy0YvRhdC+0LTQvdGL0LUuXHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDxicj4gICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6ODM0MzUzNzk3OTdcIj7RgtC10LsuIDogMzctOTctOTc8L2E+XHJcbiAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiaXRlbV9fZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDIxLTA0LTE1IDExOjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgMTUuMDQuMjAyMSAxMToxMFxyXG4gICAgICAgICAgICAgICAgPC90aW1lPlxyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiBgIFxyXG4gaW1wb3J0KCcuLi9pdGVtLXdpbi5jc3MnKVxyXG5cclxuIGVsLmlubmVySFRNTCA9IHdpbkl0ZW1cclxuLy8gIGVsLnN0eWxlLnRvcCA9IC1tb3ZpbmdFbGVtWCArICdweCdcclxuLy8gIGNvbnNvbGUubG9nKC1tb3ZpbmdFbGVtWCk7XHJcbn1cclxuXHJcblxyXG4gICAgXHJcbiAgIiwiY2xhc3MgU2xpZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcmFnc3RhcnQgYSB7IFxyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXItd2luZG93LXdpZHRoIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saXN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWl0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtaXRlbSBpbWcge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2UwZGZkZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsNjQsNjcsMC4zKSwwIDJweCA2cHggMnB4IHJnYmEoNjAsNjQsNjcsMC4xNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLmRyYWdzdGFydCB7XHJcbiAgICAgICAgLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmFiYmluZyB7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGlzdC5ncmFiYmluZyBpbWcge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5kcmFnc3RhcnQgYSB7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgIC5hdHRyYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zX193cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13aW5kb3ctd2lkdGhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiNmJiNTkxZWRlMDhlZTIyZTkzMjguanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCR0LDRgtGD0YI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjNiMWI1NjA0ZmFmNzhjYjM4MThlLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QrdC60YHRgtGA0LjQvC3Qv9Cw0YDQujwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYjhjNjEzMzc1MGYyYjUzNjY4YmEuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCU0LXRgtGB0LrQuNC5INGB0LDQtDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiODI5MzY5ZWI1YWZmNTg1NGE2MGQuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCb0LDQsdC40YDQuNC90YI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjM5OWYzNmViNDlmOWIxMWUyNzM2LmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QmNCz0YDQvtCy0YvQtSDQsNCy0YLQvtC80LDRgtGLPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NsaWRlci1jb21wb25lbnQnLCBTbGlkZXIpXHJcblxyXG5jb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0cmFjdGlvbnMtbGlzdCcpLFxyXG5zbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250YWluZXInKSxcclxuICBzbGlkZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdHRyYWN0aW9ucy1pdGVtJykpXHJcblxyXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gIHNsaWRlcldyYXBwZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOSArIFwicHhcIlxyXG59IGVsc2Uge1xyXG4gIHNsaWRlcldyYXBwZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSArIFwicHhcIlxyXG59XHJcblxyXG5sZXQgY3VycmVudEluZGV4ID0gMFxyXG5sZXQgc3RhcnRQb3NpdGlvbiA9IDBcclxubGV0IGN1cnJlbnRUcmFuc2xhdGUgPSAwXHJcbmxldCBwcmV2VHJhbnNsYXRlID0gMFxyXG5sZXQgaXNEcmFnZ2luZyA9IGZhbHNlXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG59LCBmYWxzZSk7XHJcblxyXG5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuOSArIFwicHhcIlxyXG4gICAgc2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuNSArICdweCdcclxuICB9IGVsc2Uge1xyXG4gICAgc2xpZGUuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC41ICsgXCJweFwiXHJcbiAgICBzbGlkZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4zICsgJ3B4J1xyXG4gIH1cclxuICBzbGlkZS5zdHlsZS5tYXJnaW5SaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjEgKyAncHgnXHJcbiAgc2xpZGVySW1nID0gc2xpZGUucXVlcnlTZWxlY3RvcignaW1nJylcclxuXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxyXG4gIFxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydChpbmRleCkpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSlcclxuXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRvdWNoU3RhcnQoaW5kZXgpKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdG91Y2hFbmQpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRvdWNoTW92ZSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRvdWNoRW5kKVxyXG59KVxyXG5cclxuc2xpZGVyQ29udGFpbmVyLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hTdGFydChpbmRleCkge1xyXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XHJcbiAgICBjdXJyZW50SW5kZXggPSBpbmRleFxyXG4gICAgc3RhcnRQb3NpdGlvbiA9IGdldFBvc2l0aW9uWChlKVxyXG4gICAgaXNEcmFnZ2luZyA9IHRydWVcclxuICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmFiYmluZycpXHJcbiAgICBjbGVhckludGVydmFsKGluZmluaXR5U2xpZGVyKVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XHJcbiAgaWYoaXNEcmFnZ2luZykge1xyXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZ2V0UG9zaXRpb25YKGUpXHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gcHJldlRyYW5zbGF0ZSArIGN1cnJlbnRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb25cclxuICAgIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gICAgICBcclxuICAgIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gLjAwMXNcIlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hFbmQoZSkgeyBcclxuICBpc0RyYWdnaW5nID0gZmFsc2VcclxuICBjb25zdCBtb3ZlZEJ5ID0gY3VycmVudFRyYW5zbGF0ZSAtIHByZXZUcmFuc2xhdGVcclxuXHJcbiAgaWYobW92ZWRCeSA+IDEwMCAmJiBjdXJyZW50SW5kZXggPiAwKSBjdXJyZW50SW5kZXggLT0gMVxyXG4gIGlmKG1vdmVkQnkgPCAtMTAwICYmIGN1cnJlbnRJbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxKSBjdXJyZW50SW5kZXggKz0gMVxyXG5cclxuXHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAtd2luZG93LmlubmVyV2lkdGhcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuNSAtIHdpbmRvdy5pbm5lcldpZHRoICogLjEpXHJcbiAgfVxyXG5cclxuICBwcmV2VHJhbnNsYXRlID0gY3VycmVudFRyYW5zbGF0ZVxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMS4yNXNcIlxyXG4gIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdncmFiYmluZycpXHJcbiAgaWYobW92ZWRCeSAhPSAwKSB7XHJcbiAgICBsZXQgY2FwdHVyZUNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUNsaWNrLCB0cnVlKTsgLy8gY2xlYW51cFxyXG4gICAgfVxyXG4gICAgICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcHR1cmVDbGljaywgdHJ1ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zaXRpb25YKGUpIHtcclxuICByZXR1cm4gZS50eXBlLmluY2x1ZGVzKCdtb3VzZScpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbn1cclxuXHJcbmNvbnN0IGluZmluaXR5U2xpZGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGN1cnJlbnRJbmRleCsrICBcclxuICBpZihjdXJyZW50SW5kZXggPiA0KSBjdXJyZW50VHJhbnNsYXRlID0gMCwgY3VycmVudEluZGV4ID0gMFxyXG5cclxuICBtZWRpYVF1ZXJpZXNUcmFuc2xhdGUoKVxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMS4yNXNcIlxyXG59LCAyNTAwKVxyXG5cclxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzVHJhbnNsYXRlKCkge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC45IC0gcGFyc2VJbnQoc2xpZGVzWzBdLnN0eWxlLm1hcmdpblJpZ2h0KSlcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuNSAtIHBhcnNlSW50KHNsaWRlc1swXS5zdHlsZS5tYXJnaW5SaWdodCkpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHNyYykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciBzO1xyXG4gICAgICBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHMuc3JjID0gc3JjO1xyXG4gICAgICBzLm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgIHMub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcclxuICB9KTtcclxufSIsIiAgZnVuY3Rpb24gbG9hZE1hcHMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS9zZXJ2aWNlcy9jb25zdHJ1Y3Rvci8xLjAvanMvP3VtPWNvbnN0cnVjdG9yJTNBMzliMTlkZjk3MWI3YmZhYWFmZTgxZjRkMTAyOTU0Nzk5YTZiY2E4M2QxYTVlZTVmMjExNTQ0MzcyMzYwMTZlNiZhbXA7d2lkdGg9YXV0byZhbXA7aGVpZ2h0PTQ2MCZhbXA7bGFuZz1ydV9SVSZhbXA7c3Jjb2xsPXRydWVcIjtcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkaXZNYXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLW1hcCcpXHJcbiAgICAgICAgZGl2TWFwcy5hcHBlbmQoc2NyaXB0KVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSAgXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZE1hcHMoKSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIHtcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtLWhlYWRlcl9qc1wiOlwiYTA5YzQ2ZWFiZWIxYTZkZTlmZDBcIixcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtc19jc3NcIjpcIjBjNDNjMmVkMWM3ZGI5ZWZiNzgzXCIsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbS13aW5fY3NzXCI6XCJkODhhZDc2NWFlNDc2YWQxNzYwMlwifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImNvZGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG52YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLm1pbmlDc3MgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0dmFyIGNzc0NodW5rcyA9IHtcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtLWhlYWRlcl9qc1wiOjEsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfY3NzXCI6MSxcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtLXdpbl9jc3NcIjoxfTtcblx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG5cdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuXHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbG9hZFN0eWxlc2hlZXQoY2h1bmtJZCkudGhlbigoKSA9PiB7XG5cdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdH0sIChlKSA9PiB7XG5cdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KSk7XG5cdH1cbn07XG5cbi8vIG5vIGhtciIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29kZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2RlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvKiBQYXRoIGNzcy9qcyB0byBpdGVtcyAqL1xyXG5jb25zdCBwYXRIb21lID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vc3R5bGUuY3NzJykgXHJcbiAgICByZXF1aXJlKCcuL2FuaW1hdGlvbi9hbmltYXRpb24uY3NzJykgXHJcbiAgICByZXF1aXJlKCcuL2Zvb3Rlci5qcycpIFxyXG4gICAgcmVxdWlyZSgnLi9tZW51LW5hdicpIFxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKSBcclxuICAgIHJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi90b3VjaC1zbGlkZXIuanMnKSBcclxuICAgIHJlcXVpcmUoJy4veWEtbWFwcy5qcycpIFxyXG4gICAgcmVxdWlyZSgnLi9hbmltYXRpb24vL2FuaW1hdGlvbicpXHJcbiAgICByZXF1aXJlKCcuL3Nob3dGdWxsTGluay9zaG93TGlua0Z1bGwnKVxyXG4gICAgcmVxdWlyZSgnLi9sYXp5TG9hZEltZycpXHJcbiAgfVxyXG4gIHJldHVyblxyXG59XHJcbnBhdEhvbWUoKVxyXG5cclxuY29uc3QgcGF0aE9yZGVyID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvb3JkZXIuaHRtbFwiKSB7XHJcbiAgICByZXF1aXJlKCcuL29yZGVyLmNzcycpXHJcbiAgICByZXF1aXJlKCcuL21lbnUtbmF2JylcclxuICAgIHJlcXVpcmUoJy4vZm9vdGVyLmpzJylcclxuICAgIHJlcXVpcmUoJy4vbW9kYWwtd2luZG93LmpzJylcclxuICAgIHJlcXVpcmUoJy4vb3JkZXIuanMnKVxyXG4gIH1cclxufSBcclxucGF0aE9yZGVyKClcclxuXHJcbmNvbnN0IHBhdGhJdGVtcyA9IChwYXRoKSA9PiB7XHJcbiAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBwYXRoKSB7XHJcbiAgICBpbXBvcnQoJy4vaXRlbS1oZWFkZXIuanMnKVxyXG4gICAgaW1wb3J0KCcuL2l0ZW1zLmNzcycpXHJcbiAgfVxyXG59XHJcbnBhdGhJdGVtcyhcIi9iZXpsaW1pdC12LW1lZ2FsZW5kZS5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9vdG1ldC1kZW4tcm96aGRlbml5YS12LWtpbm8uaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvdmlwdXNrbm9pLXYtbWVnYWxlbmRlLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL21lZ2FsZW5kLXBvbG5vc3R5dS1vdGtyaXQuaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvcGl0c3RzYS12LXBvZGFyb2suaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvYm9udXNuYXlhLXNpc3RlbWEuaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvaWdyb3ZpZS1hdnRvbWF0aS1vdGtyaXRpLmh0bWxcIilcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==