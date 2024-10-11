import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default AllRoutes;
