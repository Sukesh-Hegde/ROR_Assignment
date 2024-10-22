import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import StoreList from "./components/StoreList";
import AdminDashboard from "./pages/AdminDashboard";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stores" element={<StoreList />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/owner-dashboard" element={<StoreOwnerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
