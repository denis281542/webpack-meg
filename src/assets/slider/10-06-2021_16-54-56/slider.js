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