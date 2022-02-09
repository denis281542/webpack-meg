const headerHTML = `
  <header class="header-item">
    <nav class="nav">
      <a class="nav__btn-back">
        <i class="fas fa-chevron-left"></i>
        Назад
      </a>
      <a class="nav__news">
        Мегаленд Тагил - Новости
      </a>
    </nav>
  </header>
`

let header = document.createElement('div')
header.innerHTML = headerHTML

export {header}