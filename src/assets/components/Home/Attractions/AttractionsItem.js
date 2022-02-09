import React, {useState} from "react";

export const AttractionsItem = ({attraction, moveAttraction, start, move, end}) => {
  
  return(<>
    <li className="attractions-item">
      <img 
        src={attraction.img} 
        alt={attraction.description} 
        // onClick={e => moveAttraction(e)} 
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