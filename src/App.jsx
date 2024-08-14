function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <div className="contentTop">
          <div className="categories">
            <ul>
              <li>Все</li>
              <li>Мясные</li>
              <li>Вегетарианская</li>
              <li>Гриль</li>
              <li>Гриль</li>
              <li>Закрытые</li>
            </ul>
          </div>
          <div className="sort">
            <img src="img/sort-arrow.svg" alt="Sort-arrow" />
            <span>Сортировка по:</span>
            <span>популярности</span>
          </div>
        </div>
        <h1>Все пиццы</h1>

        <div className="pizzas">
          <div className="card">
            <img width={260} height={260} src="img/pizzas/2.png" alt="Pizza" />
            <h2>Сырная</h2>
            <div className="options">
              <ul>
                <li>тонкое</li>
                <li>традиционное</li>
                <li>26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="cardInfo">
              <span>от 395 ₽</span>
              <button className="button">
                <img width={12} height={12} src="img/card-plus.svg" alt="Plus" />
                Добавить
              </button>
            </div>
          </div>

          <div className="card">
            <img width={260} height={260} src="img/pizzas/2.png" alt="Pizza" />
            <h2>Сырная</h2>
            <div className="options">
              <ul>
                <li>тонкое</li>
                <li>традиционное</li>
                <li>26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="cardInfo">
              <span>от 395 ₽</span>
              <button className="button">
                <img width={12} height={12} src="img/card-plus.svg" alt="Plus" />
                Добавить
              </button>
            </div>
          </div>

          <div className="card">
            <img width={260} height={260} src="img/pizzas/2.png" alt="Pizza" />
            <h2>Сырная</h2>
            <div className="options">
              <ul>
                <li>тонкое</li>
                <li>традиционное</li>
                <li>26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="cardInfo">
              <span>от 395 ₽</span>
              <button className="button">
                <img width={12} height={12} src="img/card-plus.svg" alt="Plus" />
                Добавить
              </button>
            </div>
          </div>

          <div className="card">
            <img width={260} height={260} src="img/pizzas/2.png" alt="Pizza" />
            <h2>Сырная</h2>
            <div className="options">
              <ul>
                <li>тонкое</li>
                <li>традиционное</li>
                <li>26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="cardInfo">
              <span>от 395 ₽</span>
              <button className="button">
                <img width={12} height={12} src="img/card-plus.svg" alt="Plus" />
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
