import React, {useState} from "react";

export const AttractionsItem = ({attraction, start, move, end}) => {
  
  return(<>
    <li className="attractions-item">
      <img 
        src={attraction.img} 
        alt={attraction.description} 
        onDragStart={e => e.preventDefault()} 
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
      />
      <h3 className="attractions-description">{attraction.description}</h3>
    </li>
  </>)
}