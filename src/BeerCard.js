import React from "react";

function BeerCard(props) {
  return (
    <div className="Beer">
    <li style={{listStyle: "none"}}>
      <img style={{ height: "200px" }} src={props.image_url} alt={props.name}></img>
      <div>{props.name}</div>
      <div>{props.description}</div>
    </li>
    </div>
  );
}

export default BeerCard;
