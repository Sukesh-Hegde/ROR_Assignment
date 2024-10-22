import React, { useEffect, useState } from "react";
import api from "../services/api";

function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await api.get("/stores");
        setStores(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load stores.");
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <table>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Address</th>
            <th>Overall Rating</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store._id}>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.average_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StoreList;
