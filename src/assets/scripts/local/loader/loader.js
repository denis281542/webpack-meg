import './loader.css'

let loader = document.createElement('div'),
  i = 1

while(i <= 12) {
  let div = document.createElement('div')
  loader.prepend(div)
  i++
}  
  
loader.classList.add('lds-spinner')

export { loader }