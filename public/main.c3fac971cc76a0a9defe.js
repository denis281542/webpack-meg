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
          <img class="footer__logo" src="25b426fb7668dde3abef.png" alt="?????????????? ????????????????">
          <div class="footer__description">
            ?? ?????????????? ??????????????????????, 2009 ??? 2020 <br>
            ?????????????? ???????????????? ?????????????????? ???????????? (???????????????????????????????????? ?? ???????????? ???????????????????????? ????????????????????) <br>
            ?????????????? ?????????????????? <br>
            <a class="footer__feedback"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd6ZeZB3l5mQOsdub03OTQLdSbJrUmEC_vcwYPqriPslgL4tg/viewform?entry.632640978=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB"
              target="_blank"
            >???????????????? ??????????</a>
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
                <a href="">??.??????????</a>
              </li>
              <li class="menu__item">
                <a href="">????????</a>
              </li>
              <li class="menu__item">
                <a href="">????????</a>
              </li>
              <li class="menu__item">
                <a href="">???????? ????????????????</a>
              </li>
              <li class="menu__item">
                <a href="">??????????????????????</a>
              </li>
            </ul>
            <ul class="menu__right">
              <li class="menu__item right">
                <a href="">??????????</a>
              </li>
              <li class="menu__item right">
                <a href="">????????</a>
              </li>
              <li class="menu__item right">
                <a href="">????????????????</a>
              </li>
            </ul>
            <a href="/">
              <img src="baa2b45d7c9bed4a275f.png" alt="">
            </a>
            <a type="a" class="menu__btn">???????????????? ????????????????</a>
            <div class="toggle__wrapper">
              <button class="menu__toggle">????????</button>
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
                <label for="date">???????? ???????????????????? ??????????????????</label>
                <input id="date" type="date">
                <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="name">??????</label>
                  <input id="name" type="text" placeholder="???????????? ???????? ????????????????">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="phone">?????????????????? ??????????????</label>
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
                  <label for="count">???????????????????? ??????????</label>
                  <input id="count" type="number" placeholder="?????????????? ?????????? ??????????">
                  <small>Error message</small>
                </div>
                <div class="modal__field">
                  <label for="package">???????????????? ??????????????????????</label>
                  <select class="package" name="package" id="package">
                    <option value="6606">?????????????? (???? 10 ??????.) - 4700.00 RUB</option>
                    <option value="6608">?????????????? (???? 10 ??????.) - 7900.00 RUB</option>
                  </select>
                </div>
                <p class="package__description">
                  ?????????? ?? 1 ???????????????????? -1 ??????. ???????????? ?????????????????? ?????????????? -1 ??????. ?????????????????? ???????????????????? ?????????? (????????????????, ????????????, ????????????????).???????????????? ????????-10????. ?????????????????????????????? ?? ????????-10????. ?????????????????????????? ?????????? ??????????.
                </p>
              </div>
              <div class="modal__buttons">
                <button type="button" class="modal__btn prev-btn">??????????</button>
                <button type="button" class="modal__btn next-btn">??????????</button>

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
    nextTab.innerHTML = '??????????????????'
  } else {
    nextTab.innerHTML = '??????????'
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
    setErrorFor(username, "?????????????? ??????")
  } else if(usernameValue.length <= 2) {
    setErrorFor(username, "?????????????? ???????????????? ??????")
  } else if(!validateLnag(usernameValue)) {
    setErrorFor(username, "?????????????? ?????????????? ??????????")
  } else {
    setSuccessFor(username)
  }

  if(phoneValue === '') {
    setErrorFor(phone, "?????????????? ?????????? ????????????????")
  } else if(phoneValue.length < 18) {
    setErrorFor(phone, "?????????? ???????????????? ?????????????? ????????????????")
  } else {
    setSuccessFor(phone)
  }

  if(emailValue === '') {
    setErrorFor(email, "?????????????? email")
  } else if(!validateEmail(emailValue)) {
    setErrorFor(email, "?????????????? ???????????????????? email")
  }

  if(countValue === '') {
    setErrorFor(count, "?????????????? ???????????????????? ??????????" )
  }
  }

	
}

function validateLnag(username) {
  return (/^[??-????-??]/).test(username)
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
   var mask = '+7 (111) 111-11-11'; // ???????????? ??????????

   if (/[0-9\+\ \-\(\)]/.test(event.key)) {
       // ?????????? ???????????????? ???????????????????? this.value ?? mask
       // ?? ?????????????? ?????????? ????
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

function animationElement(ev) {
  ev.preventDefault()  
// console.log(this.style.marginRight = '0px');
  const ANIMATION_SPEED = '.6s'

  let elemWidth = this.offsetWidth/2,
    elemHeidght = this.offsetHeight/2,      
    movingElemX = document.documentElement.clientWidth/2 - (this.getBoundingClientRect().left + elemWidth),
    movingElemY = document.documentElement.clientHeight/2 - (this.getBoundingClientRect().top + elemHeidght),
    scaleX = (document.documentElement.clientWidth/2) / (elemWidth),
    scaleY = (document.documentElement.clientHeight/2) / (elemHeidght)

  // if(movingElemX === 0) {
  //   movingElemX = document.documentElement.clientWidth/2
  // }

  /*Create wrapper on element*/
  let wrap = document.createElement('div') 
  wrap.className = 'start'
  this.before(wrap)     
  
  // Create bg
  setTimeout(() => {
    let backgroundWrap = document.createElement('div')
    backgroundWrap.className = 'empty'      
    document.body.append(backgroundWrap)
    backgroundWrap.className += ' filter'

    /*Center element*/
    setTimeout(() => {          
      wrap.style.transitionDuration = ANIMATION_SPEED
      wrap.style.transitionProperty = 'left, top'
      wrap.style.width = this.clientWidth + 'px'
      wrap.style.height = this.clientHeight + 'px'
      this.style.position = 'relative'
      wrap.append(this)
      wrap.style.left = movingElemX + 'px'
      wrap.style.top = movingElemY + 'px'
      
      /*Increase element*/
      setTimeout(() => {
        this.style.transitionDuration = ANIMATION_SPEED
        this.style.transitionProperty = 'transform'
        this.style.transform = `scale(${scaleX}, ${scaleY})`
      }, 100)
    }, 0)
  }, 0)
  
  

  // Element border none  
  // this.style.borderRadius = window.getComputedStyle(this).getPropertyValue('border-radius') 
  // this.style.transitionDuration = '3s'
  // this.style.transitionProperty = 'borderRadius'
  this.style.borderRadius = '0px'
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
                <h3 class="attractions-description">??????????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="3b1b5604faf78cb3818e.jpg" alt="">
                <h3 class="attractions-description">??????????????-????????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="b8c6133750f2b53668ba.jpg" alt="">
                <h3 class="attractions-description">?????????????? ??????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="829369eb5aff5854a60d.jpg" alt="">
                <h3 class="attractions-description">????????????????</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="399f36eb49f9b11e2736.jpg" alt="">
                <h3 class="attractions-description">?????????????? ????????????????</h3>
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

setTimeout(() => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39b19df971b7bfaaafe81f4d102954799a6bca83d1a5ee5f21154437236016e6&amp;width=auto&amp;height=460&amp;lang=ru_RU&amp;srcoll=true";
    let divMaps = document.querySelector('.contacts-map')
    divMaps.append(script)
}, 1)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcz8yZTI1Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYW5pbWF0aW9uL2FuaW1hdGlvbi5jc3M/NGJhNyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL29yZGVyLmNzcz9jMGM3Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvc2hvd0Z1bGxMaW5rL3Nob3dGdWxsTGluay5jc3M/ZWNjMyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL3N0eWxlLmNzcz84NjQ2Iiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYW5pbWF0aW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jb2RlLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2xvY2FsL21lbnUtbmF2LmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvbW9kYWwtd2luZG93LmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vY29kZS8uL3NyYy9hc3NldHMvc2NyaXB0cy9sb2NhbC9zaG93RnVsbExpbmsvc2hvd0xpbmtGdWxsLmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvdG91Y2gtc2xpZGVyLmpzIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwveWEtbWFwcy5qcyIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2RlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvbG9jYWwvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUQ7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0EsK0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7QUNuVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHdCQUF3Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsR0FBRztBQUNoSztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsbUhBQW1IO0FBQ25ILG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWix3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcmVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUN2RDBCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPLElBQUksT0FBTztBQUMxRCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7Ozs7QUFJSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUEsc0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsaUJBQWlCO0FBQ25FO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7OztBQ25QQTtBQUNBO0FBQ0EsZ0tBQWdLLGVBQWUsZUFBZSxlQUFlO0FBQzdNO0FBQ0E7QUFDQSxDQUFDLEk7Ozs7OztVQ0xEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsNkhBQTZIO1dBQzNKLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsNEJBQTRCLFFBQVE7V0FDMUQ7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLG9CQUFvQjtXQUNwQztXQUNBLGtHQUFrRyxZQUFZLE9BQU87V0FDckg7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0VBQWtFLGtDQUFrQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NmQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZUFBZSw2QkFBNkI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsOEJBQThCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQjtXQUNsQjtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUEsUzs7Ozs7V0NuRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQzs7V0FFaEM7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLGNBQWM7V0FDZDtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLDRHOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMscUZBQTJCO0FBQ3ZDLElBQUksbUJBQU8sQ0FBQyx5REFBYTtBQUN6QixJQUFJLG1CQUFPLENBQUMsMERBQVk7QUFDeEIsSUFBSSxtQkFBTyxDQUFDLHFFQUFtQjtBQUMvQixJQUFJLG1CQUFPLENBQUMsbUhBQStDO0FBQzNELElBQUksbUJBQU8sQ0FBQyxxRUFBbUI7QUFDL0IsSUFBSSxtQkFBTyxDQUFDLDJEQUFjO0FBQzFCLElBQUksbUJBQU8sQ0FBQyxpRkFBd0I7QUFDcEMsSUFBSSxtQkFBTyxDQUFDLDRGQUE2QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3pCLElBQUksbUJBQU8sQ0FBQywwREFBWTtBQUN4QixJQUFJLG1CQUFPLENBQUMseURBQWE7QUFDekIsSUFBSSxtQkFBTyxDQUFDLHFFQUFtQjtBQUMvQixJQUFJLG1CQUFPLENBQUMsdURBQVk7QUFDeEI7QUFDQSxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseU1BQTBCO0FBQzlCLElBQUksMExBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmMzZmFjOTcxY2M3NmEwYTlkZWZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWxpbmsnKVxyXG5cclxubGV0IHNjcmVlblBvc2l0aW9uU2hvdyA9IHdpbmRvdy5pbm5lckhlaWdodC8xLjJcclxubGV0IHNjcmVlblBvc2l0aW9uUmVtb3ZlID0gd2luZG93LmlubmVySGVpZ2h0LzZcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgIHNob3dFbGVtQW5pbWF0aW9uKGxpbmssIHNjcmVlblBvc2l0aW9uU2hvdywgJ2FjdGl2ZScpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICByZW1vdmVFbGVtQW5pbWF0aW9uKGxpbmssIHNjcmVlblBvc2l0aW9uUmVtb3ZlLCAnYWN0aXZlJylcclxufSlcclxuXHJcbmZ1bmN0aW9uIHNob3dFbGVtQW5pbWF0aW9uKGVsZW1lbiwgc2NyZWVuUG9zaXRpb25TaG93LCBjbGFzc0Nzcykge1xyXG4gICAgaWYoZWxlbWVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IHNjcmVlblBvc2l0aW9uU2hvdykgeyBcclxuICAgIGVsZW1lbi5jbGFzc0xpc3QuYWRkKGNsYXNzQ3NzKSBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRWxlbUFuaW1hdGlvbihlbGVtZW4sIHNjcmVlblBvc2l0aW9uUmVtb3ZlLCBjbGFzc0Nzcykge1xyXG4gICAgaWYoZWxlbWVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IHNjcmVlblBvc2l0aW9uUmVtb3ZlKSB7XHJcbiAgICBlbGVtZW4uY2xhc3NMaXN0LnJlbW92ZShjbGFzc0NzcykgXHJcbiAgICB9XHJcbn0gIiwiY2xhc3MgRm9vdGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMTM0MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlcl9faW5uZXIge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHggNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlcl9fbG9nbyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlcl9fZGVzY3JpcHRpb24sIC5mb290ZXJfX2ZlZWRiYWNrIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIGNvbG9yOiAjZDZkNmQ2O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2lubmVyXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZm9vdGVyX19sb2dvXCIgc3JjPVwiMjViNDI2ZmI3NjY4ZGRlM2FiZWYucG5nXCIgYWx0PVwi0JvQvtCz0L7RgtC40L8g0JzQtdCz0LDQu9C10L3QtFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgwqkg0KXQvtC70LTQuNC90LMgwqvQnNC10LPQsNC/0L7Qu9C40YHCuywgMjAwOSDigJQgMjAyMCA8YnI+XHJcbiAgICAgICAgICAgINCj0YHQu9C+0LLQuNGPINC00L7Qs9C+0LLQvtGA0LAg0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLRiyAo0LrQvtC90YTQuNC00LXQvdGG0LjQsNC70YzQvdC+0YHRgtGMINC4INC30LDRidC40YLQsCDQv9C10YDRgdC+0L3QsNC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40LgpIDxicj5cclxuICAgICAgICAgICAg0J/RgNCw0LLQuNC70LAg0L/QvtGB0LXRidC10L3QuNGPIDxicj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJmb290ZXJfX2ZlZWRiYWNrXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZDZaZVpCM2w1bVFPc2R1YjAzT1RRTGRTYkpyVW1FQ192Y3dZUHFyaVBzbGdMNHRnL3ZpZXdmb3JtP2VudHJ5LjYzMjY0MDk3OD0lRDAlOUQlRDAlQjglRDAlQjYlRDAlQkQlRDAlQjglRDAlQjkrJUQwJUEyJUQwJUIwJUQwJUIzJUQwJUI4JUQwJUJCXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICA+0J7RgdGC0LDQstC40YLRjCDQvtGC0LfRi9CyPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgYFxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmb290ZXItY29tcG9uZW50JywgRm9vdGVyKSIsImNsYXNzIE1lbnVOYXYgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBsZXQgY2lyY2xlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4yMiArICdweCdcclxuXHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2U0O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyX19tZW51LWJnIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlcl9fbWVudS1iZy0tYWN0aXZlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEzNTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fbGVmdCwgLm1lbnVfX3JpZ2h0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19sZWZ0LS1hY3RpdmUsIC5tZW51X19yaWdodC0tYWN0aXZlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICBcclxuICAgICAgICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgLjMyLCAxLjIpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4xcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2xlZnQge1xyXG4gICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51X19yaWdodCB7XHJcbiAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgIHdpZHRoOiAyMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2l0ZW0gYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnVfX2J0biB7XHJcbiAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWZmZmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDMwcHggOXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudV9fdG9nZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI3MHB4KSB7XHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUgaW1nIHtcclxuICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKCR7Y2lyY2xlV2lkdGh9IGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgIGhlaWd0aDogMTAwJTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICAuaGVhZGVyLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg3MzBweCBhdCBjZW50ZXIpO1xyXG4gICAgICAgICAgICBoZWlndGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudSBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudS0tYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fYnRuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X190b2dnbGUtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX3RvZ2dsZS0tYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fdG9nZ2xlLS1hY3RpdmU6OmFmdGVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51IC50b2dnbGVfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgICBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAuMzIsIDEuMik7ICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuN3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjhzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC45cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjFzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0Lm1lbnVfX2l0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHQubWVudV9faXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodC5tZW51X19pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lbnVfX2xlZnQge1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVudV9fcmlnaHQge1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51LWJnXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPG5hdiBjbGFzcz1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudV9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QnS7QotCw0LPQuNC7PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCf0LDRgNC6PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCa0LDRhNC1PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCU0LXQvdGMINGA0L7QttC00LXQvdC40Y88L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+0JzQtdGA0L7Qv9GA0LjRj9GC0LjRjzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51X19yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnVfX2l0ZW0gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj7QkNC60YbQuNC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCm0LXQvdGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudV9faXRlbSByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImJhYTJiNDVkN2M5YmVkNGEyNzVmLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIHR5cGU9XCJhXCIgY2xhc3M9XCJtZW51X19idG5cIj7Ql9Cw0LrQsNC30LDRgtGMINC/0YDQsNC30LTQvdC40Lo8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGVfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudV9fdG9nZ2xlXCI+0JzQtdC90Y48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCduYXYtY29tcG9uZW50JywgTWVudU5hdilcclxuXHJcbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZV9fd3JhcHBlcicpXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJylcclxubGV0IG1lbnVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xlZnQnKVxyXG5sZXQgbWVudUxlZnRMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJylcclxubGV0IG1lbnVSaWd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19yaWdodCcpXHJcbmxldCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fdG9nZ2xlJylcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLWFjdGl2ZScpXHJcbiAgbWVudUxlZnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fbGVmdC0tYWN0aXZlJylcclxuICBtZW51UmlndGguY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fcmlnaHQtLWFjdGl2ZScpXHJcbiAgdG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3RvZ2dsZS0tYWN0aXZlJylcclxuICBtZW51TGVmdExpLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2l0ZW0tLWFjdGl2ZScpXHJcbiAgfSlcclxufVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KVxyXG4iLCJjbGFzcyBNb2RhbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgLnRhYiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGlucHV0LmludmFsaWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM0LCAyMzQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyZWNjNzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX3dyYXBwZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogOTV2aDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fZmllbGQgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19maWVsZCBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1kYXRlXSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnV0dG9ucyB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDQ2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWwgLm5leHQtYnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDkwZGM7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsIC5wcmV2LWJ0biB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idG4tY2xvc2Uge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idG4tY2xvc2UgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDczO1xyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICAgIC5wYWNrYWdlIHtcclxuICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9ICAgICBcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc21hbGwuaW52YWxpZCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1kYXRlXSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgLm1vZGFsX19mb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4NXZ3O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjg4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzbWFsbC5pbnZhbGlkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb3JtXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwicmVnRm9ybVwiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+0JTQsNGC0LAg0L/RgNC+0LLQtdC00LXQvdC40Y8g0L/RgNCw0LfQtNC90LjQutCwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+0KTQmNCePC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRh1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+0JzQvtCx0LjQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGhvbmVcIiB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCIrNyAoOTk5KSAxMjMtNDUtNjdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbEBlbWFpbC5ydVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRcIj7QmtC+0LvQuNGH0LXRgdGC0LLQviDQtNC10YLQtdC5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY291bnRcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+INC00LXRgtC10LlcIj5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYWNrYWdlXCI+0J/QsNC60LXRgtC90L7QtSDQv9GA0LXQtNC70L7QttC10L3QuNC1PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInBhY2thZ2VcIiBuYW1lPVwicGFja2FnZVwiIGlkPVwicGFja2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2NjA2XCI+0JHQsNC30L7QstGL0LkgKNC00L4gMTAg0YfQtdC7LikgLSA0NzAwLjAwIFJVQjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2NjA4XCI+0J/RgNC10LzQuNGD0LwgKNC00L4gMTAg0YfQtdC7LikgLSA3OTAwLjAwIFJVQjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYWNrYWdlX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICDQmtCy0LXRgdGCINGBIDEg0LDQvdC40LzQsNGC0L7RgNC+0LwgLTEg0YfQsNGBLiDQkNGA0LXQvdC00LAg0LHQsNC90LrQtdGC0L3QvtC5INC60L7QvNC90LDRgtGLIC0xINGH0LDRgS4g0YPQutGA0LDRiNC10L3QuNC1INCx0LDQvdC60LXRgtC90L7Qs9C+INGB0YLQvtC70LAgKNGB0LrQsNGC0LXRgNGC0YwsINC/0L7RgdGD0LTQsCwg0YHQsNC70YTQtdGC0LrQuCku0JPQtdC70LjQtdCy0YvQtSDRiNCw0YDRiy0xMNGI0YIuINC/0YDQuNCz0LvQsNGB0LjRgtC10LvRjNC90YvQtSDQsiDQutC40L3Qvi0xMNGI0YIuINCi0L7RgNC20LXRgdGC0LLQtdC90L3Ri9C5INCy0YvQvdC+0YEg0YLQvtGA0YLQsC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibW9kYWxfX2J0biBwcmV2LWJ0blwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibW9kYWxfX2J0biBuZXh0LWJ0blwiPtCU0LDQu9C10LU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLW1vZGFsLWJ0blwiIGNsYXNzPVwibW9kYWxfX2J0bi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbW9kYWwtY29tcG9uZW50JywgTW9kYWwpXHJcblxyXG4vKiBPcGVuIG1vZGFsICovXHJcbmxldCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcblxyXG5uYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59KVxyXG5cclxuLyogQ2xvc2UgbW9kYWwgd2luZG93ICovXHJcbmxldCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1vZGFsLWJ0bicpXHJcbmxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fd3JhcHBlcicpXHJcbmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKGV2ZW50KSB7XHJcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC50YWdOYW1lXHJcblxyXG4gIGlmKHRhcmdldCAhPSAnQlVUVE9OJykgcmV0dXJuXHJcbiAgXHJcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpIHtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn0pXHJcblxyXG4vKiBDdXJyZW50IGRhdGUgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKClcclxuXHJcbi8qIE11bHRpcGxlIHN0ZXBzICovXHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyksXHJcbiAgbmV4dFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LWJ0bicpLFxyXG4gIHByZXZUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi1idG4nKSxcclxuICB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwibmFtZVwiXScpLFxyXG4gIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJwaG9uZVwiXScpLFxyXG4gIGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJlbWFpbFwiXScpLFxyXG4gIGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykgXHJcblxyXG5sZXQgY3VycmVudFRhYiA9IDBcclxudGFic1tjdXJyZW50VGFiXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuXHJcbi8qIFJlbW92ZSBjbGFzcyBpbnZhbGlkIGZvY3VzZWQgKi9cclxuZnVuY3Rpb24gcmVtb3ZlSW52YWxpZChlbCkge1xyXG4gIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJylcclxuICAgIGVsLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuICB9XHJcbn1cclxudXNlcm5hbWUub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQodXNlcm5hbWUpXHJcbnBob25lLm9uZm9jdXMgPSAoKSA9PiByZW1vdmVJbnZhbGlkKHBob25lKVxyXG5lbWFpbC5vbmZvY3VzID0gKCkgPT4gcmVtb3ZlSW52YWxpZChlbWFpbClcclxuY291bnQub25mb2N1cyA9ICgpID0+IHJlbW92ZUludmFsaWQoY291bnQpXHJcblxyXG5uZXh0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHZhbGlkYXRlRm9ybSgpXHJcblxyXG4gIGxldCBpbnZhbGlkTmFtZSA9IHVzZXJuYW1lLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpLFxyXG4gICAgaW52YWxpZENsYXNzID0gdGFic1tjdXJyZW50VGFiXS5xdWVyeVNlbGVjdG9yKCcuaW52YWxpZCcpXHJcblxyXG4gICAgaWYoaW52YWxpZENsYXNzKSByZXR1cm5cclxuXHJcbiAgY3VycmVudFRhYisrXHJcbiAgXHJcbiAgaWYoY3VycmVudFRhYiA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdGb3JtJyk7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBsZXQgcHJvY2Vzc2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb2Nlc3NpbmcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Byb2Nlc3NpbmcgLi4uJykpO1xyXG4gICAgZm9ybS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwcm9jZXNzaW5nLCBmb3JtKTtcclxuXHJcbiAgICByZWRpcmVjdE1haW5QYWdlKClcclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgQXJyYXkuZnJvbSh0YWJzKS5maW5kKHNob3dUYWIpXHJcbiAgc2hvd0J0bigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzaG93VGFiKGVsLCBpZHgpIHtcclxuICBpZihpZHggPT09IGN1cnJlbnRUYWIpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dCdG4oKSB7XHJcbiAgaWYoY3VycmVudFRhYiA+PSB0YWJzLmxlbmd0aCAtIDEpIHtcclxuICAgIG5leHRUYWIuaW5uZXJIVE1MID0gJ9Ce0YLQv9GA0LDQstC40YLRjCdcclxuICB9IGVsc2Uge1xyXG4gICAgbmV4dFRhYi5pbm5lckhUTUwgPSAn0JTQsNC70LXQtSdcclxuICB9XHJcblxyXG4gIGN1cnJlbnRUYWIgPiAwXHJcbiAgICA/IHByZXZUYWIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXHJcbiAgICA6IHByZXZUYWIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59XHJcblxyXG5wcmV2VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGN1cnJlbnRUYWItLVxyXG4gIGlmKGN1cnJlbnRUYWIgPCAwKSB7XHJcbiAgICBjdXJyZW50VGFiID0gMFxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIEFycmF5LmZyb20odGFicykuZmluZChzaG93VGFiKVxyXG4gIHNob3dCdG4oKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gcmVkaXJlY3RNYWluUGFnZSgpIHtcclxuICBsZXQgdGltZXIgPSAxMVxyXG4gIHNldEludGVydmFsKCgpPT4ge1xyXG4gICAgdGltZXItLVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3JtJykuaW5uZXJIVE1MID0gdGltZXJcclxuICAgIGlmKHRpbWVyID09PSAxKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL21lZ2FsYW5kcGFyay53ZWIuYXBwL1wiIFxyXG4gICAgfVxyXG4gIH0sIDEwMDApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgbGV0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJcIiksXHJcbiAgICBjdXJyZW50VGFicyA9IHRhYltjdXJyZW50VGFiXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpXHJcbiAgICB2YWxpZCA9IHRydWVcclxuXHJcbiAgY29uc3QgdXNlcm5hbWVWYWx1ZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgIHBob25lVmFsdWUgPSBwaG9uZS52YWx1ZS50cmltKCksXHJcbiAgICBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpLFxyXG4gICAgY291bnRWYWx1ZSA9IGNvdW50LnZhbHVlLnRyaW0oKSxcclxuICAgIGNvbnRhaW5zQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGN1cnJlbnRUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgaWYodXNlcm5hbWVWYWx1ZSA9PT0gJycpIHtcclxuICAgIHNldEVycm9yRm9yKHVzZXJuYW1lLCBcItCS0LLQtdC00LjRgtC1INCk0JjQnlwiKVxyXG4gIH0gZWxzZSBpZih1c2VybmFtZVZhbHVlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCLQodC70LjRiNC60L7QvCDQutC+0YDQvtGC0LrQvtC1INCk0JjQnlwiKVxyXG4gIH0gZWxzZSBpZighdmFsaWRhdGVMbmFnKHVzZXJuYW1lVmFsdWUpKSB7XHJcbiAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCLQktCy0LXQtNC40YLQtSDRgNGD0YHRgdC60LjQtSDQsdGD0LrQstGLXCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFN1Y2Nlc3NGb3IodXNlcm5hbWUpXHJcbiAgfVxyXG5cclxuICBpZihwaG9uZVZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IocGhvbmUsIFwi0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIpXHJcbiAgfSBlbHNlIGlmKHBob25lVmFsdWUubGVuZ3RoIDwgMTgpIHtcclxuICAgIHNldEVycm9yRm9yKHBob25lLCBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCDRgdC70LjRiNC60L7QvCDQutC+0YDQvtGC0LrQuNC5XCIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFN1Y2Nlc3NGb3IocGhvbmUpXHJcbiAgfVxyXG5cclxuICBpZihlbWFpbFZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IoZW1haWwsIFwi0JLQstC10LTQuNGC0LUgZW1haWxcIilcclxuICB9IGVsc2UgaWYoIXZhbGlkYXRlRW1haWwoZW1haWxWYWx1ZSkpIHtcclxuICAgIHNldEVycm9yRm9yKGVtYWlsLCBcItCS0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5IGVtYWlsXCIpXHJcbiAgfVxyXG5cclxuICBpZihjb3VudFZhbHVlID09PSAnJykge1xyXG4gICAgc2V0RXJyb3JGb3IoY291bnQsIFwi0JLQstC10LTQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQtdGC0LXQuVwiIClcclxuICB9XHJcbiAgfVxyXG5cclxuXHRcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVMbmFnKHVzZXJuYW1lKSB7XHJcbiAgcmV0dXJuICgvXlvQsC3Rj9CQLdCvXS8pLnRlc3QodXNlcm5hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xyXG4gIHJldHVybiByZS50ZXN0KGVtYWlsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG4gIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCBzbWFsbCA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJylcclxuICBpbnB1dC5jbGFzc05hbWUgPSAnaW52YWxpZCdcclxuXHJcbiAgaWYoaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkJykpIHtcclxuICAgIHNtYWxsLmNsYXNzTmFtZSA9ICdpbnZhbGlkJ1xyXG4gICAgc21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZVxyXG4gICAgc21hbGwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3VjY2Vzc0ZvcihpbnB1dCkge1xyXG4gIGlucHV0LmNsYXNzTmFtZSA9ICdzdWNjZXNzJ1xyXG4gIGNvbnN0IHNtYWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NtYWxsJylcclxuICBzbWFsbHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJylcclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1pbk1heENvdW4obnVtKSB7XHJcbiAgaWYobnVtID4gMzApIHtcclxuICAgIGNvbnNvbGUubG9nKCdmJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qIEFkZCBwaG9uZSBtYXNrICs3KDk5OSkxMjMtNDUtNjcgKi9cclxucGhvbmUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYoICEoZXZlbnQua2V5ID09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dSaWdodCcgfHwgZXZlbnQua2V5ID09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PSAnVGFiJykpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKSB9XHJcbiAgIHZhciBtYXNrID0gJys3ICgxMTEpIDExMS0xMS0xMSc7IC8vINCX0LDQtNCw0LXQvCDQvNCw0YHQutGDXHJcblxyXG4gICBpZiAoL1swLTlcXCtcXCBcXC1cXChcXCldLy50ZXN0KGV2ZW50LmtleSkpIHtcclxuICAgICAgIC8vINCX0LTQtdGB0Ywg0L3QsNGH0LjQvdCw0LXQvCDRgdGA0LDQstC90LjQstCw0YLRjCB0aGlzLnZhbHVlINC4IG1hc2tcclxuICAgICAgIC8vINC6INC/0YDQuNC80LXRgNGDINC+0L/Rj9GC0Ywg0LbQtVxyXG4gICAgICAgdmFyIGN1cnJlbnRTdHJpbmcgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSBjdXJyZW50U3RyaW5nLmxlbmd0aDtcclxuICAgICAgIGlmICgvWzAtOV0vLnRlc3QoZXZlbnQua2V5KSkge1xyXG4gICAgICAgICAgIGlmIChtYXNrW2N1cnJlbnRMZW5ndGhdID09ICcxJykge1xyXG4gICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFN0cmluZyArIGV2ZW50LmtleTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBmb3IgKHZhciBpPWN1cnJlbnRMZW5ndGg7IGk8bWFzay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmIChtYXNrW2ldID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFN0cmluZyArIGV2ZW50LmtleTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgKz0gbWFza1tpXTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgfSBcclxufSk7XHJcbiIsIi8qIFNob3cgaXRlbSBidG4gKi9cclxubGV0IHNob3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1idG4nKVxyXG5sZXQgY2FyZEhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX193cmFwcGVyJylcclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtKCkge1xyXG4gIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIGNhcmRIaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC0taGlkZGVuJylcclxufVxyXG5cclxuc2hvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dJdGVtKVxyXG5cclxuLy8gLyogQ3VycmVudCBkYXRlICovXHJcbi8vIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4vLyBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4vLyAgIGxldCBkZCA9IGRhdGUuZ2V0RGF0ZSgpXHJcbi8vICAgaWYgKGRkIDwgMTApIGRkID0gJzAnICsgZGRcclxuXHJcbi8vICAgbGV0IE1NID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4vLyAgIGlmIChNTSA8IDEwKSBNTSA9ICcwJyArIE1NXHJcblxyXG4vLyAgIGxldCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbi8vICAgaWYgKHl5eXkgPCAxMCkgeXl5eSA9ICcwJyArIHl5eXlcclxuXHJcbi8vICAgcmV0dXJuIHl5eXkgKyAnLScgKyBNTSArICctJyArIGRkXHJcbi8vIH1cclxuXHJcbi8vIGxldCBjdXJyZW50RGF0ZSA9IGZvcm1hdERhdGUoZGF0ZSlcclxuLy8gZGF0ZUlucHV0LnZhbHVlID0gY3VycmVudERhdGVcclxuXHJcbmltcG9ydCAnLi9vcmRlci5jc3MnXHJcblxyXG4vKiBPcGVuIG1vZGFsICovXHJcbmxldCBvZmZlcnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9mZmVyc19fbGlzdCcpXHJcbmxldCBwaG9uZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmUnKVxyXG5sZXQgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKVxyXG5sZXQgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3dyYXBwZXInKVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChldmVudCkge1xyXG4gIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQudGFnTmFtZVxyXG5cclxuICBpZih0YXJnZXQgIT0gJ0JVVFRPTicpIHJldHVyblxyXG4gIFxyXG4gIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn1cclxuXHJcbm9mZmVyc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbm5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59KVxyXG5cclxucGhvbmVTZWN0aW9uLmZvckVhY2goZWwgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG59KSIsImltcG9ydCAnLi9zaG93RnVsbExpbmsuY3NzJ1xyXG5cclxubGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKVxyXG5cclxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYW5pbWF0aW9uRWxlbWVudClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvbkVsZW1lbnQoZXYpIHtcclxuICBldi5wcmV2ZW50RGVmYXVsdCgpICBcclxuLy8gY29uc29sZS5sb2codGhpcy5zdHlsZS5tYXJnaW5SaWdodCA9ICcwcHgnKTtcclxuICBjb25zdCBBTklNQVRJT05fU1BFRUQgPSAnLjZzJ1xyXG5cclxuICBsZXQgZWxlbVdpZHRoID0gdGhpcy5vZmZzZXRXaWR0aC8yLFxyXG4gICAgZWxlbUhlaWRnaHQgPSB0aGlzLm9mZnNldEhlaWdodC8yLCAgICAgIFxyXG4gICAgbW92aW5nRWxlbVggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvMiAtICh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBlbGVtV2lkdGgpLFxyXG4gICAgbW92aW5nRWxlbVkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LzIgLSAodGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBlbGVtSGVpZGdodCksXHJcbiAgICBzY2FsZVggPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLzIpIC8gKGVsZW1XaWR0aCksXHJcbiAgICBzY2FsZVkgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodC8yKSAvIChlbGVtSGVpZGdodClcclxuXHJcbiAgLy8gaWYobW92aW5nRWxlbVggPT09IDApIHtcclxuICAvLyAgIG1vdmluZ0VsZW1YID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLzJcclxuICAvLyB9XHJcblxyXG4gIC8qQ3JlYXRlIHdyYXBwZXIgb24gZWxlbWVudCovXHJcbiAgbGV0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcclxuICB3cmFwLmNsYXNzTmFtZSA9ICdzdGFydCdcclxuICB0aGlzLmJlZm9yZSh3cmFwKSAgICAgXHJcbiAgXHJcbiAgLy8gQ3JlYXRlIGJnXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBsZXQgYmFja2dyb3VuZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYmFja2dyb3VuZFdyYXAuY2xhc3NOYW1lID0gJ2VtcHR5JyAgICAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFja2dyb3VuZFdyYXApXHJcbiAgICBiYWNrZ3JvdW5kV3JhcC5jbGFzc05hbWUgKz0gJyBmaWx0ZXInXHJcblxyXG4gICAgLypDZW50ZXIgZWxlbWVudCovXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgICAgICAgICAgXHJcbiAgICAgIHdyYXAuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gQU5JTUFUSU9OX1NQRUVEXHJcbiAgICAgIHdyYXAuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2xlZnQsIHRvcCdcclxuICAgICAgd3JhcC5zdHlsZS53aWR0aCA9IHRoaXMuY2xpZW50V2lkdGggKyAncHgnXHJcbiAgICAgIHdyYXAuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jbGllbnRIZWlnaHQgKyAncHgnXHJcbiAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgICAgIHdyYXAuYXBwZW5kKHRoaXMpXHJcbiAgICAgIHdyYXAuc3R5bGUubGVmdCA9IG1vdmluZ0VsZW1YICsgJ3B4J1xyXG4gICAgICB3cmFwLnN0eWxlLnRvcCA9IG1vdmluZ0VsZW1ZICsgJ3B4J1xyXG4gICAgICBcclxuICAgICAgLypJbmNyZWFzZSBlbGVtZW50Ki9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBBTklNQVRJT05fU1BFRURcclxuICAgICAgICB0aGlzLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXHJcbiAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZVh9LCAke3NjYWxlWX0pYFxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9LCAwKVxyXG4gIH0sIDApXHJcbiAgXHJcbiAgXHJcblxyXG4gIC8vIEVsZW1lbnQgYm9yZGVyIG5vbmUgIFxyXG4gIC8vIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXJhZGl1cycpIFxyXG4gIC8vIHRoaXMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzNzJ1xyXG4gIC8vIHRoaXMuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2JvcmRlclJhZGl1cydcclxuICB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcwcHgnXHJcbn0gIFxyXG4gICAgXHJcbiAgIiwiY2xhc3MgU2xpZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcmFnc3RhcnQgYSB7IFxyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXItd2luZG93LXdpZHRoIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1saXN0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxuICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWl0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXR0cmFjdGlvbnMtaXRlbSBpbWcge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2UwZGZkZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsNjQsNjcsMC4zKSwwIDJweCA2cHggMnB4IHJnYmEoNjAsNjQsNjcsMC4xNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLmRyYWdzdGFydCB7XHJcbiAgICAgICAgLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLmF0dHJhY3Rpb25zLWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdHRyYWN0aW9ucy1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmFiYmluZyB7XHJcbiAgICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICAuYXR0cmFjdGlvbnMtbGlzdC5ncmFiYmluZyBpbWcge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5kcmFnc3RhcnQgYSB7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgIC5hdHRyYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF0dHJhY3Rpb25zX193cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13aW5kb3ctd2lkdGhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiNmJiNTkxZWRlMDhlZTIyZTkzMjguanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCR0LDRgtGD0YI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjNiMWI1NjA0ZmFmNzhjYjM4MThlLmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QrdC60YHRgtGA0LjQvC3Qv9Cw0YDQujwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYjhjNjEzMzc1MGYyYjUzNjY4YmEuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCU0LXRgtGB0LrQuNC5INGB0LDQtDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhdHRyYWN0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdHRyYWN0aW9ucy1saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiODI5MzY5ZWI1YWZmNTg1NGE2MGQuanBnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhdHRyYWN0aW9ucy1kZXNjcmlwdGlvblwiPtCb0LDQsdC40YDQuNC90YI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYXR0cmFjdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYXR0cmFjdGlvbnMtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIjM5OWYzNmViNDlmOWIxMWUyNzM2LmpwZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXR0cmFjdGlvbnMtZGVzY3JpcHRpb25cIj7QmNCz0YDQvtCy0YvQtSDQsNCy0YLQvtC80LDRgtGLPC9oMz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NsaWRlci1jb21wb25lbnQnLCBTbGlkZXIpXHJcblxyXG5jb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0cmFjdGlvbnMtbGlzdCcpLFxyXG5zbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250YWluZXInKSxcclxuICBzbGlkZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdHRyYWN0aW9ucy1pdGVtJykpXHJcblxyXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA0MDBweClcIikubWF0Y2hlcykge1xyXG4gIHNsaWRlcldyYXBwZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOSArIFwicHhcIlxyXG59IGVsc2Uge1xyXG4gIHNsaWRlcldyYXBwZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSArIFwicHhcIlxyXG59XHJcblxyXG5sZXQgY3VycmVudEluZGV4ID0gMFxyXG5sZXQgc3RhcnRQb3NpdGlvbiA9IDBcclxubGV0IGN1cnJlbnRUcmFuc2xhdGUgPSAwXHJcbmxldCBwcmV2VHJhbnNsYXRlID0gMFxyXG5sZXQgaXNEcmFnZ2luZyA9IGZhbHNlXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG59LCBmYWxzZSk7XHJcblxyXG5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuOSArIFwicHhcIlxyXG4gICAgc2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggKiAuNSArICdweCdcclxuICB9IGVsc2Uge1xyXG4gICAgc2xpZGUuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC41ICsgXCJweFwiXHJcbiAgICBzbGlkZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4zICsgJ3B4J1xyXG4gIH1cclxuICBzbGlkZS5zdHlsZS5tYXJnaW5SaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjEgKyAncHgnXHJcbiAgc2xpZGVySW1nID0gc2xpZGUucXVlcnlTZWxlY3RvcignaW1nJylcclxuXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxyXG4gIFxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydChpbmRleCkpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSlcclxuXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRvdWNoU3RhcnQoaW5kZXgpKVxyXG4gIHNsaWRlckltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdG91Y2hFbmQpXHJcbiAgc2xpZGVySW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRvdWNoTW92ZSlcclxuICBzbGlkZXJJbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRvdWNoRW5kKVxyXG59KVxyXG5cclxuc2xpZGVyQ29udGFpbmVyLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hTdGFydChpbmRleCkge1xyXG4gIHJldHVybiBmdW5jdGlvbihlKSB7XHJcbiAgICBjdXJyZW50SW5kZXggPSBpbmRleFxyXG4gICAgc3RhcnRQb3NpdGlvbiA9IGdldFBvc2l0aW9uWChlKVxyXG4gICAgaXNEcmFnZ2luZyA9IHRydWVcclxuICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmFiYmluZycpXHJcbiAgICBjbGVhckludGVydmFsKGluZmluaXR5U2xpZGVyKVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XHJcbiAgaWYoaXNEcmFnZ2luZykge1xyXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZ2V0UG9zaXRpb25YKGUpXHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gcHJldlRyYW5zbGF0ZSArIGN1cnJlbnRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb25cclxuICAgIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gICAgICBcclxuICAgIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gLjAwMXNcIlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG91Y2hFbmQoZSkgeyBcclxuICBpc0RyYWdnaW5nID0gZmFsc2VcclxuICBjb25zdCBtb3ZlZEJ5ID0gY3VycmVudFRyYW5zbGF0ZSAtIHByZXZUcmFuc2xhdGVcclxuXHJcbiAgaWYobW92ZWRCeSA+IDEwMCAmJiBjdXJyZW50SW5kZXggPiAwKSBjdXJyZW50SW5kZXggLT0gMVxyXG4gIGlmKG1vdmVkQnkgPCAtMTAwICYmIGN1cnJlbnRJbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxKSBjdXJyZW50SW5kZXggKz0gMVxyXG5cclxuXHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDAwcHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBjdXJyZW50SW5kZXggKiAtd2luZG93LmlubmVyV2lkdGhcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuNSAtIHdpbmRvdy5pbm5lcldpZHRoICogLjEpXHJcbiAgfVxyXG5cclxuICBwcmV2VHJhbnNsYXRlID0gY3VycmVudFRyYW5zbGF0ZVxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMS4yNXNcIlxyXG4gIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdncmFiYmluZycpXHJcbiAgaWYobW92ZWRCeSAhPSAwKSB7XHJcbiAgICBsZXQgY2FwdHVyZUNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUNsaWNrLCB0cnVlKTsgLy8gY2xlYW51cFxyXG4gICAgfVxyXG4gICAgICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcHR1cmVDbGljaywgdHJ1ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zaXRpb25YKGUpIHtcclxuICByZXR1cm4gZS50eXBlLmluY2x1ZGVzKCdtb3VzZScpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbn1cclxuXHJcbmNvbnN0IGluZmluaXR5U2xpZGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGN1cnJlbnRJbmRleCsrICBcclxuICBpZihjdXJyZW50SW5kZXggPiA0KSBjdXJyZW50VHJhbnNsYXRlID0gMCwgY3VycmVudEluZGV4ID0gMFxyXG5cclxuICBtZWRpYVF1ZXJpZXNUcmFuc2xhdGUoKVxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRUcmFuc2xhdGV9cHgpYFxyXG4gIHNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMS4yNXNcIlxyXG59LCAyNTAwKVxyXG5cclxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzVHJhbnNsYXRlKCkge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQwMHB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICBjdXJyZW50VHJhbnNsYXRlID0gY3VycmVudEluZGV4ICogKC13aW5kb3cuaW5uZXJXaWR0aCAqIC45IC0gcGFyc2VJbnQoc2xpZGVzWzBdLnN0eWxlLm1hcmdpblJpZ2h0KSlcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFRyYW5zbGF0ZSA9IGN1cnJlbnRJbmRleCAqICgtd2luZG93LmlubmVyV2lkdGggKiAuNSAtIHBhcnNlSW50KHNsaWRlc1swXS5zdHlsZS5tYXJnaW5SaWdodCkpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHNyYykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciBzO1xyXG4gICAgICBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHMuc3JjID0gc3JjO1xyXG4gICAgICBzLm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgIHMub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcclxuICB9KTtcclxufSIsInNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS9zZXJ2aWNlcy9jb25zdHJ1Y3Rvci8xLjAvanMvP3VtPWNvbnN0cnVjdG9yJTNBMzliMTlkZjk3MWI3YmZhYWFmZTgxZjRkMTAyOTU0Nzk5YTZiY2E4M2QxYTVlZTVmMjExNTQ0MzcyMzYwMTZlNiZhbXA7d2lkdGg9YXV0byZhbXA7aGVpZ2h0PTQ2MCZhbXA7bGFuZz1ydV9SVSZhbXA7c3Jjb2xsPXRydWVcIjtcclxuICAgIGxldCBkaXZNYXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLW1hcCcpXHJcbiAgICBkaXZNYXBzLmFwcGVuZChzY3JpcHQpXHJcbn0sIDEpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbS1oZWFkZXJfanNcIjpcIjY3M2JmYzIxOGJmZDNiYTQzNGJhXCIsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfY3NzXCI6XCIwYzQzYzJlZDFjN2RiOWVmYjc4M1wifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImNvZGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG52YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLm1pbmlDc3MgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0dmFyIGNzc0NodW5rcyA9IHtcInNyY19hc3NldHNfc2NyaXB0c19sb2NhbF9pdGVtLWhlYWRlcl9qc1wiOjEsXCJzcmNfYXNzZXRzX3NjcmlwdHNfbG9jYWxfaXRlbXNfY3NzXCI6MX07XG5cdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuXHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IGxvYWRTdHlsZXNoZWV0KGNodW5rSWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXTtcblx0XHRcdHRocm93IGU7XG5cdFx0fSkpO1xuXHR9XG59O1xuXG4vLyBubyBobXIiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29kZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLyogUGF0aCBjc3MvanMgdG8gaXRlbXMgKi9cclxuY29uc3QgcGF0SG9tZSA9ICgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICByZXF1aXJlKCcuL3N0eWxlLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi9hbmltYXRpb24vYW5pbWF0aW9uLmNzcycpIFxyXG4gICAgcmVxdWlyZSgnLi9mb290ZXIuanMnKSBcclxuICAgIHJlcXVpcmUoJy4vbWVudS1uYXYnKSBcclxuICAgIHJlcXVpcmUoJy4vbW9kYWwtd2luZG93LmpzJykgXHJcbiAgICByZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKSBcclxuICAgIHJlcXVpcmUoJy4vdG91Y2gtc2xpZGVyLmpzJykgXHJcbiAgICByZXF1aXJlKCcuL3lhLW1hcHMuanMnKSBcclxuICAgIHJlcXVpcmUoJy4vYW5pbWF0aW9uLy9hbmltYXRpb24nKVxyXG4gICAgcmVxdWlyZSgnLi9zaG93RnVsbExpbmsvc2hvd0xpbmtGdWxsJylcclxuICB9XHJcbiAgcmV0dXJuXHJcbn1cclxucGF0SG9tZSgpXHJcblxyXG5jb25zdCBwYXRoT3JkZXIgPSAoKSA9PiB7XHJcbiAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9vcmRlci5odG1sXCIpIHtcclxuICAgIHJlcXVpcmUoJy4vb3JkZXIuY3NzJylcclxuICAgIHJlcXVpcmUoJy4vbWVudS1uYXYnKVxyXG4gICAgcmVxdWlyZSgnLi9mb290ZXIuanMnKVxyXG4gICAgcmVxdWlyZSgnLi9tb2RhbC13aW5kb3cuanMnKVxyXG4gICAgcmVxdWlyZSgnLi9vcmRlci5qcycpXHJcbiAgfVxyXG59IFxyXG5wYXRoT3JkZXIoKVxyXG5cclxuY29uc3QgcGF0aEl0ZW1zID0gKHBhdGgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IHBhdGgpIHtcclxuICAgIGltcG9ydCgnLi9pdGVtLWhlYWRlci5qcycpXHJcbiAgICBpbXBvcnQoJy4vaXRlbXMuY3NzJylcclxuICB9XHJcbn1cclxucGF0aEl0ZW1zKFwiL2JlemxpbWl0LXYtbWVnYWxlbmRlLmh0bWxcIilcclxucGF0aEl0ZW1zKFwiL290bWV0LWRlbi1yb3poZGVuaXlhLXYta2luby5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi92aXB1c2tub2ktdi1tZWdhbGVuZGUuaHRtbFwiKVxyXG5wYXRoSXRlbXMoXCIvbWVnYWxlbmQtcG9sbm9zdHl1LW90a3JpdC5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9waXRzdHNhLXYtcG9kYXJvay5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9ib251c25heWEtc2lzdGVtYS5odG1sXCIpXHJcbnBhdGhJdGVtcyhcIi9pZ3JvdmllLWF2dG9tYXRpLW90a3JpdGkuaHRtbFwiKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9