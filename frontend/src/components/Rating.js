import React, { useState } from "react";
import api from "../services/api";

function Rating({ storeId }) {
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/stores/${storeId}/rate`, { rating });
      alert("Rating submitted!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit rating.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rate this store (1 to 5):</label>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
      />
      <button type="submit">Submit Rating</button>
    </form>
  );
}

export default Rating;
