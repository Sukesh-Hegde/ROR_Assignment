import React from "react";
import "./StoreCard.css";

function StoreCard({ store, onRateClick }) {
  return (
    <div className="store-card">
      <h2>{store.name}</h2>
      <p>{store.address}</p>
      <p>Average Rating: {store.averageRating}</p>
      <button className="rate-button" onClick={onRateClick}>
        Rate This Store
      </button>
    </div>
  );
}

export default StoreCard;
