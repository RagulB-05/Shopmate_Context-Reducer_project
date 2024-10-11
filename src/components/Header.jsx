import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useCart } from "../Context/CardContext";

const Header = () => {
  const {cartList} = useCart()
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="React Logo" />
        <span className="name">ShopMate</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="cart" className="items">
        <span>Cart: {cartList.length} </span>
      </Link>
    </header>
  );
};

export default Header;
