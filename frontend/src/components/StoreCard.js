import React from "react";
import "./StoreCard.css";

function StoreCard({ store, onRateClick }) {
  return (
    <div className="store-card">
      {/* Store Image */}
      <img src={store.image} alt={store.name} className="store-image" />

      {/* Store Information */}
      <h2>{store.name}</h2>
      <p>{store.address}</p>
      <p>Average Rating: {store.averageRating}</p>

      {/* Rate Button */}
      <button className="rate-button" onClick={onRateClick}>
        Rate This Store
      </button>
    </div>
  );
}

export default StoreCard;
