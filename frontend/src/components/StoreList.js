import React, { useState } from "react";
import "./StoreList.css";
import StoreCard from "./StoreCard";
import RatingDialog from "./RatingDialog";

function StoreList() {
  const [stores] = useState([
    {
      id: 1,
      name: "Awesome Store",
      address: "123 Main St",
      averageRating: 4.2,
    },
    { id: 2, name: "Cool Stuff", address: "456 Elm St", averageRating: 3.8 },
    { id: 3, name: "Great Deals", address: "789 Oak St", averageRating: 4.5 },
  ]);

  const [selectedStore, setSelectedStore] = useState(null);

  const openRatingDialog = (store) => {
    setSelectedStore(store);
  };

  const closeDialog = () => {
    setSelectedStore(null);
  };

  return (
    <div className="store-list">
      <h1>Store List</h1>
      <div className="store-grid">
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            store={store}
            onRateClick={() => openRatingDialog(store)}
          />
        ))}
      </div>
      {selectedStore && (
        <RatingDialog store={selectedStore} onClose={closeDialog} />
      )}
    </div>
  );
}

export default StoreList;
