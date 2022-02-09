export function load(el) {
  let isLoad = false
  return function() {
      document.addEventListener('scroll', () => {
      if((el.getBoundingClientRect().bottom - el.getBoundingClientRect().height + 50) <= 0) {
        createWrap()
        isLoad = true
      }
    })
  }()
}

function createWrap() {
  const sliderWrap = document.createElement('div'),
    sliderList = document.createElement('ul')

  sliderWrap.classList.add('slider-container')
  sliderList.classList.add('attractions-list')

  document.querySelector('.attractions-header').append(sliderWrap)
  sliderWrap.append(sliderList)
  render(sliderList, slidesArray)
}

