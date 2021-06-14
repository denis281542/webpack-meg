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
