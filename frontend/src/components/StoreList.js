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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Fe1ea_QAqmuXuJWWM4jUNhHB6ZuRpM7ukg&s",
    },
    {
      id: 2,
      name: "Cool Stuff",
      address: "456 Elm St",
      averageRating: 3.8,
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
    },
    {
      id: 3,
      name: "Great Deals",
      address: "789 Oak St",
      averageRating: 4.5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Toy_and_sweets_%282654815553%29.jpg",
    },
    {
      id: 4,
      name: "Electronics Hub",
      address: "321 Tech Ave",
      averageRating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRBzpdzdT2AJwSg3ZpMEVdgEOejoCQyEX-g&s",
    },
    {
      id: 5,
      name: "Fashion Fiesta",
      address: "678 Style St",
      averageRating: 4.1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HK_TWD_%E8%8D%83%E7%81%A3_Tsuen_Wan_%E9%9D%92%E5%B1%B1%E9%81%93_Castle_Peak_Road_%E5%8D%83%E8%89%B2%E5%BA%97_Kolour_mall_shop_Giordano_Clothing_August_2023_Px3_02.jpg/2560px-HK_TWD_%E8%8D%83%E7%81%A3_Tsuen_Wan_%E9%9D%92%E5%B1%B1%E9%81%93_Castle_Peak_Road_%E5%8D%83%E8%89%B2%E5%BA%97_Kolour_mall_shop_Giordano_Clothing_August_2023_Px3_02.jpg",
    },
    {
      id: 6,
      name: "Home Essentials",
      address: "789 Comfort Ln",
      averageRating: 4.3,
      image:
        "https://cdn.pixabay.com/photo/2016/11/27/04/56/big-1862122_1280.jpg",
    },
    {
      id: 7,
      name: "Outdoor Adventure",
      address: "101 Wild Trail",
      averageRating: 4.7,
      image:
        "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Gadget Zone",
      address: "345 Tech Park",
      averageRating: 4.4,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Pet Paradise",
      address: "234 Pets Rd",
      averageRating: 4.6,
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

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
