const slider = document.querySelector('.attractions-list'),
  slides = Array.from(document.querySelectorAll('.attractions-item'))

let isDragging = false,
  startPos = 0,
  currantTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

  slides.forEach((el, idx) => {
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

    window.oncontextmenu = (e) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    function touchStart(idx) {
      return function(e) {
        isDragging = true
        console.log(e.toushes[0], isDragging);
      }
    }

    function touchEnd() {
      isDragging = false
      currentIndex = idx
      console.log('end', currentIndex);
    }

    function touchMove() {
      if(isDragging) {
        console.log('move');
      }
    }
  })