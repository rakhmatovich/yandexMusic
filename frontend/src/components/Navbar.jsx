import "./NavbarStyle.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <h1 className="yandex"><a href="http://localhost:5173/"><img src="/images/yandex-music.png" alt="" /></a></h1>

        <ul id="navbar">
          <li>
            <Link to="/">Главное</Link>
          </li>
          <li>
            <Link to="/podcast">Подкасты и книги</Link>
          </li>
          <li>
            <Link to="/detyam">Детям</Link>
            <img className="poiskovik-logo" src="/images/poisk.png" alt="" />
          </li>
        </ul>
        <button className="Sign">
          <li id="il">
            <Link to="/login">Войти</Link>
          </li>
        </button>
      </nav>
      <div className="line" />
    </>
  );
}

export default Navbar;


// <li id="il">
//           <Link to="/">Активировать промокод</Link>{" "}
//           <img className="promokod" src="/images/bilet.svg" alt="" />
//         </li>