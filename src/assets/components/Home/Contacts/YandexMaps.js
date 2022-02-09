import React from "react";

export const YandexMaps = () => {
	const mapContainer = document.querySelector('.contacts-map')

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
				}, 
				{              
					// preset: 'islands#circleDotIcon',
					// iconColor: 'green',
					iconLayout: 'default#image',
					iconImageHref: '/src/assets/images/icons/map-marker-alt-solid.svg',
					iconImageSize: [30, 42],
					iconImageOffset: [-3, -42],
					hideIconOnBalloonOpen: false,
				})
		
			myMap.geoObjects
				.add(myPlacemark)
	})
    
	return(<>
		<div className="contacts-map" id="map"></div>
	</>)
}