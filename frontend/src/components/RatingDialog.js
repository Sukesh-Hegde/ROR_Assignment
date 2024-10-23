import React, { useState } from "react";
import "./RatingDialog.css";

function RatingDialog({ store, onClose }) {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    alert(`You rated ${store.name} with ${rating} stars!`);
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Rate {store.name}</h2>
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < rating ? "filled" : ""}
              onClick={() => setRating(i + 1)}
            >
              ★
            </span>
          ))}
        </div>
        <button className="dialog-button" onClick={handleSubmit}>
          Submit Rating
        </button>
        <button className="dialog-button close" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RatingDialog;
