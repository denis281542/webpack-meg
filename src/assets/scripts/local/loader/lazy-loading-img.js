import { loader } from './loader'

let images = document.querySelectorAll('.item-img')

images.forEach(i => {
  document.addEventListener('DOMContentLoaded', () => {
    let wrap = document.createElement('div')
    i.before(wrap)
    wrap.append(i)
    wrap.innerHTML += loader.outerHTML
    // i.style.display = 'none'
  })
  window.addEventListener('load', () => {
    i.style.display = 'block'
    let loders = document.querySelectorAll('.item-link .lds-spinner')
    console.log(loders);
    loders.forEach(l => {
      l.remove()
    })
  })
})