import './ymaps.css'
import { loader } from '../loader/loader'

const mapContainer = document.querySelector('.contacts-map')
mapContainer.innerHTML = loader.outerHTML

// const script = document.createElement('script')
// function fetchData() {
//   return new Promise(resolve => {                    
//     resolve(script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39b19df971b7bfaaafe81f4d102954799a6bca83d1a5ee5f21154437236016e6&amp;width=auto&amp;height=460&amp;lang=ru_RU&amp;srcoll=true")
//   })
// // }
// // let divMaps = document.querySelector('.contacts-map')
// // divMaps.append(script)

// // window.addEventListener('load', async () => {
// //   loader.style.display = 'block'
// //   await fetchData()
// // })

// setTimeout(() => {
//   mapContainer.style.display = 'block'
//   mapContainer.childNodes[0].remove()
// }, 2000);

ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
    center: [57.8757590667037, 60.01522250000001],
    zoom: 15
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContentBody: [`
    <div class="drugstore-mini">
      <h4 class="map-header">Мегалэнд - семейный парк развлечений</h4>
      <img class="map-img" src="787ea7c7733552bdc540.jpg">
      <div class="m-b-5">
        <span>Адрес:</span>Свердловское шоссе, 31 В
      </div>
      <div class="m-b-5">
        <span>Время работы:</span> 10:00-22:00
      </div>
      <div>
        <span>Тел.:</span>  8(800)600-33-92
      </div>                
    </div>              
    `],
    }, {              
    // iconLayout: 'default#image',
    // iconImageHref: 'src/assets/images/icons/map-marker-alt-solid.svg',
    // iconImageSize: [30, 32],
    // iconImageOffset: [-10, -54],
    preset: 'islands#circleDotIcon',
    iconColor: 'green',
    hideIconOnBalloonOpen: false,
  })

  myMap.geoObjects
    .add(myPlacemark)
})