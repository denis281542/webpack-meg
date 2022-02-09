import './showFullLink.css'
import {items, renderItem, renderLi} from '../items/item'
import {header} from '../items/item-header'

let links = document.querySelectorAll('.item')

links.forEach(link => {
  link.addEventListener('click', animationElement)
  // link.addEventListener('click', showItem)
})

function showItem(el) {
    const id = +el.dataset.id,
      item = items.find(i => i.id === id),
      list = item.li
  
    import('../items/item-win.css')
    renderItem(el, item)
    
    // Paste header in item
    import('../items/header-item.css')
    document.querySelector('.item__wrapper').before(header)
  
    // Add btn back in item-header
    const btnBack = document.querySelector('.nav__btn-back')
    btnBack.addEventListener('click', () => {
      window.location.pathname = '/'
    })
    
    // Return if list item empty
    if(list === undefined) {
      return
    } else renderLi(list)
}

function animationElement() { 
  this.style.marginLeft = '0px'
  this.style.marginRight = '0px'

  const ANIMATION_SPEED = '.65s'

  let elemWidth = this.offsetWidth/2,
    elemHeight = this.offsetHeight/2,      
    movingElemX = document.documentElement.clientWidth/2 - (this.getBoundingClientRect().left + elemWidth),
    movingElemY = document.documentElement.clientHeight/2 - (this.getBoundingClientRect().top + elemHeight),
    scaleX = (document.documentElement.clientWidth/2) / (elemWidth),
    scaleY = (document.documentElement.clientHeight/2) / (elemHeight),
    itemPath = this.childNodes[1].getAttribute("href")


  /*Create wrapper on element*/
  let wrap = document.createElement('div') 
  wrap.className = 'start'
  this.before(wrap)     
  
  createBg()

  let p = new Promise(resolve => {
    setTimeout(() => {    
      resolve(centerElement(wrap, this, movingElemX, movingElemY, ANIMATION_SPEED))
    }, 0)
  }).then(() => {
    return new Promise(resolve => {
      setTimeout(() => {  
        resolve(createClone(this, scaleX, scaleY, ANIMATION_SPEED))                
      }, 100)  
    })
  }).then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (showItem(this)) 
      }, 650)
    })
  }) 
    
  this.style.borderRadius = '0px'
} 

function createBg() {
  let backgroundWrap = document.createElement('div')
  backgroundWrap.className = 'empty'      
  document.body.append(backgroundWrap)
  backgroundWrap.className += ' filter'
}

function centerElement(wrap, el, movingElemX, movingElemY, ANIMATION_SPEED) {
  wrap.style.transitionDuration = ANIMATION_SPEED
  wrap.style.transitionProperty = 'left, top'
  wrap.style.width = el.clientWidth + 'px'
  el.style.position = 'relative'
  wrap.append(el)
  wrap.style.left = movingElemX + 'px'
  wrap.style.top = movingElemY + 'px'
}

function createClone(el, scaleX, scaleY, ANIMATION_SPEED) {
  let cloneHeight = window.getComputedStyle(el).getPropertyValue('height'),
    cloneWidth = window.getComputedStyle(el).getPropertyValue('width'),
    clone = document.createElement('div')

  clone.style.width = cloneWidth
  clone.style.height = cloneHeight
  clone.style.backgroundColor = '#ccc'
  clone.style.position = 'absolute'
  clone.style.zIndex = '1'
  el.before(clone)

  setTimeout(() => {
    coverClone(clone, scaleX, scaleY, ANIMATION_SPEED)
  }, 100)  
}

function coverClone(el, scaleX, scaleY, ANIMATION_SPEED) {
  el.style.transitionDuration = ANIMATION_SPEED
  el.style.transitionProperty = 'transform'
  el.style.transform = `scale(${scaleX}, ${scaleY})`
}

// function showItem(el) {  
//   import('../items/item-win.css')

//   renderItem(el)
 
//   const btnBack = document.querySelector('.nav__btn-back')

//   // btnBack.addEventListener('click', back)

//   function back() {
//     location.reload()
//   }
// }
