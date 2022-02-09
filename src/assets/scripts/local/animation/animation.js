const link = document.querySelector('.item-link')

let screenPositionShow = window.innerHeight/1.2
let screenPositionRemove = window.innerHeight/6

document.addEventListener('scroll', () => {
    showElemAnimation(link, screenPositionShow, 'active')
})

document.addEventListener('scroll', () => {
    removeElemAnimation(link, screenPositionRemove, 'active')
})

function showElemAnimation(elemen, screenPositionShow, classCss) {
    if(elemen.getBoundingClientRect().top < screenPositionShow) { 
    elemen.classList.add(classCss) 
    }
}

function removeElemAnimation(elemen, screenPositionRemove, classCss) {
    if(elemen.getBoundingClientRect().bottom < screenPositionRemove) {
    elemen.classList.remove(classCss) 
    }
} 