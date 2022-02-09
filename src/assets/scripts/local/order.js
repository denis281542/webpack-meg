import { render, itemsTable1, itemsTable2 } from './order/orderTab'
import './order.css'

/* Show item btn */
// let showBtn = document.getElementById('show-btn')
// let cardHidden = document.querySelector('.card__wrapper')

// function showItem() {
//   this.style.display = 'none'
//   cardHidden.classList.remove('card--hidden')
// }

// showBtn.addEventListener('click', showItem)

// /* Current date */
// let date = new Date()
// let dateInput = document.getElementById('date');

// function formatDate(date) {
//   let dd = date.getDate()
//   if (dd < 10) dd = '0' + dd

//   let MM = date.getMonth() + 1
//   if (MM < 10) MM = '0' + MM

//   let yyyy = date.getFullYear()
//   if (yyyy < 10) yyyy = '0' + yyyy

//   return yyyy + '-' + MM + '-' + dd
// }

// let currentDate = formatDate(date)
// dateInput.value = currentDate

/* Open modal */
let offersList = document.querySelector('.offers__list')
let phoneSection = document.querySelectorAll('.phone')
let navLink = document.querySelector('.menu__btn')
let modalWindow = document.querySelector('.modal__wrapper')


function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'

  // Scroll disable
  document.body.style.overflow = 'hidden'
}

offersList.addEventListener('click', openModal)
navLink.addEventListener('click', e => {
  modalWindow.style.display = 'block'
})

phoneSection.forEach(el => {
  el.addEventListener('click', openModal)
})

// Select tab
const tabs = document.querySelectorAll('.bookmark')
tabs.forEach(el => {
  el.addEventListener('click', showTab)
  
})

function showTab() {
  tabs.forEach(el => {
    el.classList.remove('bookmark--active')   
  })

  let tabWidth = window.getComputedStyle(this).getPropertyValue('width')
  tabWidth = parseInt(tabWidth)
  let id = +this.dataset.id,
    activeBtn = document.getElementById('btnBookmark'),
    translateBtn = tabWidth * (id - 1)

  this.classList.add('bookmark--active')
  activeBtn.style.transform = `translateX(${translateBtn}px)`

  if(id === 1) {
    showTable(id)
  }
  
  if(id === 2) {  
    showTable(id)
  }

  if(id === 3) {
    showTable(id)    
  }
}

function showTable(id) {
  let track = document.querySelector('.birthdays__tables'),
    table = document.querySelector('.birthdays__table1'),
    widthTable = parseInt(window.getComputedStyle(table).getPropertyValue('width'))

  track.style.transform = `translateX(${-widthTable * (id - 1)}px)`
}


// Render card-items in DOM
function createTable(table, itemsTable) {
  let ul = document.createElement('ul'),
    li = document.createElement('li')

  ul.classList.add('birthdays__list')
  li.classList.add('birthdays__card')
  li.classList.add('card')    
  table.prepend(ul)
  ul.append(li)
  render(ul, itemsTable)
}

createTable(document.querySelector('.birthdays__table1'), itemsTable1)
createTable(document.querySelector('.birthdays__table2'), itemsTable2)

function showFourCards(table, tableList) {
  let count = 4
  let showItem = 0

  if(table.length > 4) {  
    for (let i = 0; i < count; i++) {
      table[i].style.display = 'block'
    }
    if(showItem.length != table.length) {
      createBtnMore(tableList)
    }
  }
}

showFourCards(Array.from(document.querySelector('.birthdays__table1').querySelectorAll('.card-item')), document.querySelector('.birthdays__table1').querySelector('.birthdays__list'))
showFourCards(Array.from(document.querySelector('.birthdays__table2').querySelectorAll('.card-item')), document.querySelector('.birthdays__table2').querySelector('.birthdays__list'))

function createBtnMore(table) {
  let btnMore = document.createElement('button')

  btnMore.classList.add('birthdays__btn', 'btn')
  btnMore.innerHTML = 'Ещё варианты'
  table.after(btnMore)  
}

function addItem(btnMore, table, tableList) {
  let showCout = 4

  btnMore.addEventListener('click', showMoreItems)

  function showMoreItems() {
    showCout +=4
    let start = 0,
      end = start + showCout,
      showItems = table.slice(start, end) 

    showItems.forEach(el => el.style.display = 'block')
    if(showItems.length === table.length) {
      this.remove()
      tableList.style.paddingBottom = '90px'
    }
  }
}

addItem(document.querySelector('.birthdays__table1').querySelector('.birthdays__btn'), Array.from(document.querySelector('.birthdays__table1').querySelectorAll('.card-item')), document.querySelector('.birthdays__table1').querySelector('.birthdays__list'))
addItem(document.querySelector('.birthdays__table2').querySelector('.birthdays__btn'), Array.from(document.querySelector('.birthdays__table2').querySelectorAll('.card-item')), document.querySelector('.birthdays__table2').querySelector('.birthdays__list'))