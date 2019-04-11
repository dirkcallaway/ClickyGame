import React from "react";
require ('./style.css')

function PictureCard(props) {
  return (
      <div className="card" id={props.color} onClick={() => props.handleClick(props.name)}>
        <div className="card-content white-text">
            <h1 className="numbers center-block center">{props.name}</h1>
        </div>
      </div>
  )
}

export default PictureCard;