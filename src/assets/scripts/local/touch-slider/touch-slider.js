import {slide1, slide2, slide3, slide4, slide5} from '../../../images/img-prod/img'
import './touch-slider.css'

const slidesArray = [
  {id: 1, description: 'Батут', img: slide1},
  {id: 2, description: 'Экстрим-парк', img: slide2},
  {id: 3, description: 'Детский сад', img: slide3},
  {id: 4, description: 'Лабиринт', img: slide4},
  {id: 5, description: 'Игровые автоматы', img: slide5},
]

const toHTML = el => `
  <li class="attractions-item">
    <a class="attractions-link" href="#">
      <img src=${el.img} alt="">
      <h3 class="attractions-description">${el.description}</h3>
    </a>
  </li>
`

function render(el, arr) {
  const html = arr.map(i => {
    return toHTML(i)
  }).join('')
  el.innerHTML = html
}

const sliderWrap = document.createElement('div'),
  sliderList = document.createElement('ul')

sliderWrap.classList.add('slider-container')
sliderList.classList.add('attractions-list')

// document.querySelector('.attractions-header').append(sliderWrap)
sliderWrap.append(sliderList)
render(sliderList, slidesArray)

const sliderContainer = document.querySelector('.attractions-list'),
sliderWrapper = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))

// if (window.matchMedia("(max-width: 400px)").matches) {
//   sliderWrapper.style.width = window.innerWidth * 0.9 + "px"
// } else {
//   sliderWrapper.style.width = window.innerWidth * 0.5 + "px"
// }

let currentIndex = 0,
  startPosition = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  isDragging = false

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
  // console.log(slide.querySelector('img'));

  // sliderImg = slide.querySelector('img')

  slide.addEventListener('dragstart', e => e.preventDefault())
  
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseleave', touchEnd)
})

// sliderContainer.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

function touchStart(index) {
  return function(e) {
    currentIndex = index
    startPosition = getPositionX(e)
    isDragging = true
    sliderContainer.classList.add('grabbing')
    // clearInterval(infinitySlider)
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

// const infinitySlider = setInterval(e => {
//   currentIndex++  
//   if(currentIndex > 4) currentTranslate = 0, currentIndex = 0

//   mediaQueriesTranslate()
//   sliderContainer.style.transform = `translateX(${currentTranslate}px)`
//   sliderContainer.style.transition = "transform 1.25s"
// }, 2500)

function mediaQueriesTranslate() {
  if (window.matchMedia("(max-width: 400px)").matches) {
    currentTranslate = currentIndex * (-window.innerWidth * .9 - parseInt(slides[0].style.marginRight))
  } else {
    currentTranslate = currentIndex * (-window.innerWidth * .5 - parseInt(slides[0].style.marginRight))
  }
}

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//       var s;
//       s = document.createElement('script');
//       s.src = src;
//       s.onload = resolve;
//       s.onerror = reject;
//       document.head.appendChild(s);
//   });
// }