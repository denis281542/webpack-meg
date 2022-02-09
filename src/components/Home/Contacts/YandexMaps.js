import React, {useRef} from "react";
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';
import iconMegaland from '../../../assets/images/icons/map-marker-solid.svg'


export const YandexMaps = () => {
	const points = { id: 1, coods: [57.8757590667037, 60.01522250000001], title: 'Мегалэнд Нижний Тагил', img: "787ea7c7733552bdc540.jpg", address: 'Нижний Тагил, Свердловское шоссе, 31 В', workingHours: '10:00-22:00', tel: '8(800)600-33-92' }

	const customBalloon =  
		`<div style='width: 200px'>
			<h4 class="map-header">${points.title}</h4>
			<img class="map__img" src=${points.img}>
			<div class="m-b-5">
				<span>Адрес: </span> ${points.address}
			</div>
			<div class="m-b-5">
				<span>Время работы:</span> ${points.workingHours}
			</div>
			<div>
				<span>Тел.:</span>  ${points.tel}
			</div>                
		</div>`

	return <YMaps>
		<div className="contacts-map" >
			<Map style={{width: `100%`, height: `100%` }} state={{ center: points.coods, zoom: 14 }}>
				<GeoObject
					geometry={{
						type: 'Point',
						coordinates: [57.8757590667037, 60.01522250000001],
					}}
					properties= {
						{hintContent: 'Это хинт'},
						{balloonContent: customBalloon}
					}				
					modules= {
						['geoObject.addon.balloon', 'geoObject.addon.hint']
					}
					options={{
						iconLayout: 'default#image',
						iconImageHref: iconMegaland,
						iconImageSize: [40, 40],
						iconImageOffset: [-5, -42],
					}}
				/>				
			</Map>
		</div>
	</YMaps>
	// const mapContainer = document.querySelector('.contacts-map')

	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map('map', {
	// 			center: [57.8757590667037, 60.01522250000001],
	// 			zoom: 15
	// 		}, {
	// 			searchControlProvider: 'yandex#search'
	// 		}),
	// 		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	// 			balloonContentBody: [`
	// 			<div class="drugstore-mini">
	// 				<h4 class="map-header">Мегалэнд - семейный парк развлечений</h4>
	// 				<img class="map-img" src="787ea7c7733552bdc540.jpg">
	// 				<div class="m-b-5">
	// 					<span>Адрес:</span>Свердловское шоссе, 31 В
	// 				</div>
	// 				<div class="m-b-5">
	// 					<span>Время работы:</span> 10:00-22:00
	// 				</div>
	// 				<div>
	// 					<span>Тел.:</span>  8(800)600-33-92
	// 				</div>                
	// 			</div>              
	// 			`],
	// 			}, 
	// 			{              
	// 				// preset: 'islands#circleDotIcon',
	// 				// iconColor: 'green',
	// 				iconLayout: 'default#image',
	// 				iconImageHref: '/src/assets/images/icons/map-marker-alt-solid.svg',
	// 				iconImageSize: [30, 42],
	// 				iconImageOffset: [-3, -42],
	// 				hideIconOnBalloonOpen: false,
	// 			})
		
	// 		myMap.geoObjects
	// 			.add(myPlacemark)
	// })
    
	// return(<>
	// 	<div className="contacts-map" id="map"></div>
	// </>)
}