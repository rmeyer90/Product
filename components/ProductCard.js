import React from "react";

function ProductCard(props) {
  return (
    <div className="app">
      <h1 className="title">{props.product.name}</h1>
      <img src={props.product.image} width="400" alt={props.product.name}></img>
      <p>Beschreibung: {props.product.description}</p>
      <p>
        Preis: <b>{props.product.price} €</b>
      </p>
    </div>
  );
}

export default ProductCard;


