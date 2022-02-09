let imgs = document.querySelectorAll('img')
imgs.forEach(i => {
    if(!i.loading) {
        i.style.backgroundColor = '#ccc'
    }
})