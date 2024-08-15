import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to={'react-pizza/'}>
        <div className="headerLeft">
          <img src="img/logo.png" alt="Logo" />
          <div className="headerLeftInfo">
            <h2>REACT PIZZA</h2>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Link to={'react-pizza/cart'}>
        <div className="headerRight">
          <div className="headerRightInfo">
            <span>520 ₽</span>
            <div className="stick"></div>
            <div className="cartBlock">
              <img src="img/cart.svg" alt="Cart" />
              <span>3</span>
            </div>
          </div>
        </div>
      </Link>
    </header>
  );
}

export default Header;
