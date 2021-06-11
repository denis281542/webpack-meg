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
    require('./style.css') 
    require('./footer.js') 
    require('./header.js') 
    require('./modal-window.js') 
    require('@fortawesome/fontawesome-free/css/all.min.css') 
    require('./touch-slider.js') 
  }
  return
}
patHome()

const pathOrder = () => {
  if(window.location.pathname === "/order.html") {
    require('./order.css')
    require('./header.js')
    require('./footer.js')
    require('./modal-window.js')
    require('./order.js')
  }
} 
pathOrder()

const pathItems = (path) => {
  if(window.location.pathname === path) {
    import('./item-header.js')
    import('./items.css')
  }
}
pathItems("/bezlimit-v-megalende.html")
pathItems("/otmet-den-rozhdeniya-v-kino.html")
pathItems("/vipusknoi-v-megalende.html")
pathItems("/megalend-polnostyu-otkrit.html")
pathItems("/pitstsa-v-podarok.html")
pathItems("/bonusnaya-sistema.html")
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




