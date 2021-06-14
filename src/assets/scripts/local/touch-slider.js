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
        @media only screen and (min-width: 320px) {
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

/* Slider */
// const sliderContainer = document.querySelector('.slider-container'),
// slider = document.querySelector('.attractions-list'),
//   slides = Array.from(document.querySelectorAll('.attractions-item'))

// if (window.matchMedia("(max-width: 400px)").matches) {
//   sliderContainer.style.width = window.innerWidth * 0.9 + "px"
// } else {
//   sliderContainer.style.width = window.innerWidth * 0.5 + "px"
// }

// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID = 0,
//   currentIndex = 0

// slides.forEach((el, idx) => {
//   if (window.matchMedia("(max-width: 400px)").matches) {
//     el.style.width = window.innerWidth * .8 + "px"
//   } else {
//     el.style.width = window.innerWidth * .5 + "px"
//   }

//   el.style.marginRight = window.innerWidth * .05 + "px"

//   el.addEventListener('click', e => {
//     e.preventDefault()
//   })
//   const slideImg = el.querySelector('img')
//   slideImg.addEventListener('dragstart', (e) => {
//     e.preventDefault()

//     // Touch event
//     el.addEventListener('touchstart', touchStart(idx))
//     el.addEventListener('touchend', touchEnd)
//     el.addEventListener('touchmove', touchMove)
    
//     // Mouse event
//     el.addEventListener('mousedown', touchStart(idx))
//     el.addEventListener('mouseup', touchEnd)
//     el.addEventListener('mouseleave', touchEnd)
//     el.addEventListener('mousemove', touchMove)
//   })
// })

// window.oncontextmenu = (e) => {
//   e.preventDefault()
//   e.stopPropagation()
//   return false
// }

// function touchStart(idx) {
//   return function(e) {
//     isDragging = true
//     currentIndex = idx
//     startPos = getPositionX(e)
    
//     animationID = requestAnimationFrame(animation)
//     slider.classList.add('grabbing')
//   }
// }

// function touchEnd() {
//   isDragging = false
//   cancelAnimationFrame(animationID)

//   const movedBy = currentTranslate - prevTranslate
  
//   if(movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
  
//   if(movedBy > 100 && currentIndex > 0) currentIndex -= 1

//   setPositionByIndex()

//   slider.classList.remove('grabbing')
// }

// function touchMove(e) {
//   if(isDragging) {
//     const currentPosition = getPositionX(e)
//     currentTranslate = prevTranslate + currentPosition - startPos 
//   }
// }

// function getPositionX(e) {
//   return e.type.includes('mouse')
//     ? e.pageX
//     : e.touches[0].clientX
// }

// function animation() {
//   setSliderPosition()
//   if(isDragging) requestAnimationFrame(animation)
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`
// }

// function setPositionByIndex() {
//   prevTranslate = currentTranslate

//   setSliderPosition()
//   mediaQueriesTranslate()
// }

// const infinitySlider = setInterval(() => {
//   currentIndex++  
//   if(currentIndex > 4) {currentTranslate = 0, currentIndex = 0}

//   mediaQueriesTranslate()
//   setSliderPosition()
// }, 3500)

// function mediaQueriesTranslate() {
//   if (window.matchMedia("(max-width: 400px)").matches) {
//     currentTranslate = currentIndex * (-window.innerWidth * .8 - parseInt(slides[0].style.marginRight))
//   } else {
//     currentTranslate = currentIndex * (-window.innerWidth * .5 - parseInt(slides[0].style.marginRight))
//   }
// }



const sliderContainer = document.querySelector('.attractions-list'),
sliderWrapper = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))

if (window.matchMedia("(max-width: 400px)").matches) {
  sliderWrapper.style.width = window.innerWidth * 0.9 + "px"
} else {
  sliderWrapper.style.width = window.innerWidth * 0.9 + "px"
}

let currentIndex = 0
let startPosition = 0
let currentTranslate = 0
let prevTranslate = 0
let isDragging = false

slides.forEach((slide, index) => {
  slide.style.width = window.innerWidth * .75 + 'px'
  slide.style.height = window.innerWidth * .5 + 'px'
  slide.style.marginRight = window.innerWidth * .1 + 'px'
  sliderImg = slide.querySelector('img')

  sliderImg.addEventListener('touchstart', touchStart(index))
  sliderImg.addEventListener('touchend', touchEnd)
  sliderImg.addEventListener('touchmove', touchMove)
})

function touchStart(index) {
  return function(e) {
    e.preventDefault()
    currentIndex = index
    startPosition = getPositionX(e)
    isDragging = true
    sliderContainer.classList.add('grabbing')
  } 
}

function touchMove(e) {
  if(isDragging) {
    const currentPosition = getPositionX(e)
    currentTranslate = prevTranslate + currentPosition - startPosition
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`
  }
}

function touchEnd() {
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  if(movedBy > 100 && currentIndex > 0) currentIndex -= 1
  if(movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  currentTranslate = currentIndex * (-window.innerWidth * .75 - window.innerWidth * .1)
  prevTranslate = currentTranslate
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`

  sliderContainer.classList.remove('grabbing')
}

function getPositionX(e) {
  return e.touches[0].clientX
}

// const infinitySlider = setInterval(() => {
//   currentIndex++  
//   if(currentIndex > 4) {currentTranslate = 0, currentIndex = 0}

//   mediaQueriesTranslate()
//   sliderContainer.style.transform = `translateX(${currentTranslate}px)`
// }, 3500)

function mediaQueriesTranslate() {
  if (window.matchMedia("(max-width: 400px)").matches) {
    currentTranslate = currentIndex * (-window.innerWidth * .9 - parseInt(slides[0].style.marginRight))
  } else {
    currentTranslate = currentIndex * (-window.innerWidth * .5 - parseInt(slides[0].style.marginRight))
  }
}
