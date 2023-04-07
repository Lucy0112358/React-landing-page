import React from "react";
import "../styles/cardContainer.scss";
import Card from "./Card";

function CardContainer() {
  return (
  
      <div className="main-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
   
  );
}

export default CardContainer;
