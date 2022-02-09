import React, {useState} from "react"
import { AttractionsItem } from './AttractionsItem'
import {slide1, slide2, slide3, slide4, slide5} from '../../../images/img-prod/img'

export const AttractionList = () => {
  // const [isDragging, setDragging] = useState(false)
  let startPosition = 0,
    endPosition = 0,
    currentPosition = 0,
    translate = 0,
    currentIndex = 0,
    isDragging = false,
    startTime = 0,
    endTime = 0


  const attractionsArray = [
    {id: 1, description: 'Батут', img: slide1},
    {id: 2, description: 'Экстрим-парк', img: slide2},
    {id: 3, description: 'Детский сад', img: slide3},
    {id: 4, description: 'Лабиринт', img: slide4},
    {id: 5, description: 'Игровые автоматы', img: slide5},
  ]

  function start(e) {
    startPosition = getPositionX(e)
    isDragging = true
    console.log(startTime = Date.now());

    document.querySelector('.attractions-list').classList.add('grabbing')
  } 

  function move(e) {
    if(isDragging) {
      currentPosition = getPositionX(e)
      translate = currentPosition + endPosition - startPosition
      
      document.querySelector('.attractions-list')
        .style.transform = `translateX(${translate}px)`
    }
  }

  function end(e) {
    endPosition = currentPosition

    console.log(endTime = Date.now());
    if((endTime - startTime) > 150) {
      e.preventDefault()
    }

    

    
    let slides = document.querySelectorAll('.attractions-item'),
      movedBy = endPosition - startPosition,
      slideWidth = parseInt(window.getComputedStyle(document.querySelector('.attractions-item')).width, 10),
      slideMargin = parseInt(window.getComputedStyle(document.querySelector('.attractions-item')).width, 10)*.3
      
    
    if(endPosition === 0) return

    if(movedBy < -100 && currentIndex < slides.length - 1) currentIndex++
    if(movedBy > 100 && currentIndex > 0) currentIndex--
      console.log(currentIndex);
    document.querySelector('.attractions-list')
      .style.transform = `translateX(${-(slideWidth + slideMargin) * currentIndex}px)`

    endPosition = -currentIndex * (slideWidth + slideMargin)
    movedBy = 0
    isDragging = false
    document.querySelector('.attractions-list').classList.remove('grabbing')
  }

  function moveAttraction(e) {
    e.preventDefault()
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
  }

  return(<>
    <ul className="attractions-list">
      {attractionsArray.map((attraction, id) => {
        return(
          <AttractionsItem
            start={start}
            end={end}
            move={move}
            attraction={attraction}
            key={id}
            moveAttraction={moveAttraction}
          />
        )
      })}
    </ul>
  </>)
}