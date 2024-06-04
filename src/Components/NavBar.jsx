import React from "react";
import '../styles/nav-bar.css'

function NavBar() {
  return (
    <>
      <header>
        <h1>Bandage</h1>
        <span className="Links">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <a href="">Pages</a>
        </span>
        <span className="hambuger-menu">
          <a href="">Login / Register</a>
          <span>search icon</span>
          <span>cart icon</span>
          <span>likes icon</span>
        </span>
      </header>
    </>
  );
}

export default NavBar;
