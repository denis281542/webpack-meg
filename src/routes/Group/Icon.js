import React from "react";

export const Icon = ({icon}) => {
    return(
        <div className="icon">
            <img src={icon.img} alt={icon.title}/>
            <h4>{icon.title}</h4>
            <p>{icon.description}</p>
        </div>
    )
}