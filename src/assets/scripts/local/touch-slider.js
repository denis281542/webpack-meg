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
          transition: transform 1.3s;
          cursor: grab;
        }
        .attractions-item {
          list-style: none;
          text-align: center;
          user-select: none;
        }
        .attractions-item img {
          transition: transform 1.3s ease-in-out;
          width: 100%;
          height: auto;
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
          transform: scale(0.9);
        }    
      </style>

      <div class="slider-window-width">
        <div class="slider-container">
          <ul class="attractions-list">
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="/src/assets/images/attraction1.jpg" alt="">
                <h3 class="attractions-description">Батут</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="/src/assets/images/attraction2.jpg" alt="">
                <h3 class="attractions-description">Экстрим-парк</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="/src/assets/images/attraction3.jpg" alt="">
                <h3 class="attractions-description">Детский сад</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="/src/assets/images/attraction4.jpg" alt="">
                <h3 class="attractions-description">Лабиринт</h3>
              </a>
            </li>
            <li class="attractions-item">
              <a class="attractions-link" href="#">
                <img src="/src/assets/images/attraction5.jpg" alt="">
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
const sliderContainer = document.querySelector('.slider-container'),
slider = document.querySelector('.attractions-list'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))

sliderContainer.style.width = window.innerWidth * 0.5 + "px"

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((el, idx) => {
  el.style.width = window.innerWidth * .5 + "px"
  el.style.marginRight = '100px'

  el.addEventListener('click', e => {
    e.preventDefault()
  })
  const slideImg = el.querySelector('img')
  slideImg.addEventListener('dragstart', (e) => {
    e.preventDefault()

    // Touch event
    el.addEventListener('touchstart', touchStart(idx))
    el.addEventListener('touchend', touchEnd)
    el.addEventListener('touchmove', touchMove)
    
    // Mouse event
    el.addEventListener('mousedown', touchStart(idx))
    el.addEventListener('mouseup', touchEnd)
    el.addEventListener('mouseleave', touchEnd)
    el.addEventListener('mousemove', touchMove)
  })
})

window.oncontextmenu = (e) => {
  e.preventDefault()
  e.stopPropagation()
  return false
}

function touchStart(idx) {
  return function(e) {
    isDragging = true
    currentIndex = idx
    startPos = getPositionX(e)
    
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate
  
  if(movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
  
  if(movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(e) {
  if(isDragging) {
    const currentPosition = getPositionX(e)
    currentTranslate = prevTranslate + currentPosition - startPos 
  }
}

function getPositionX(e) {
  return e.type.includes('mouse')
    ? e.pageX
    : e.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * (-window.innerWidth * .5 - 100)
  prevTranslate = currentTranslate
  setSliderPosition()
}

const infinitySlider = setInterval(() => {
  currentIndex++
  currentTranslate = currentIndex * (-window.innerWidth * .5 - 100)
  if(currentIndex > 4) {currentTranslate = 0, currentIndex = 0}

  setSliderPosition()
}, 3500)