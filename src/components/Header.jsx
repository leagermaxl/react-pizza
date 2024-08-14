import React from 'react';

function Header() {
  return (
    <header>
      <div className="headerLeft">
        <img src="img/logo.png" alt="Logo" />
        <div className="headerLeftInfo">
          <h2>REACT PIZZA</h2>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
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
    </header>
  );
}

export default Header;
