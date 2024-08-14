import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import pizzas from './assets/pizzas.json';

function App() {
  // const pizzas = [
  //   { title: 'Чизбургер-пицца', price: 395, urlImage: 'img/pizzas/1.png' },
  //   { title: 'Сырная', price: 450, urlImage: 'img/pizzas/2.png' },
  //   { title: 'Креветки по-азиатски', price: 290, urlImage: 'img/pizzas/3.png' },
  //   { title: 'Сырный цыпленок', price: 385, urlImage: 'img/pizzas/4.png' },
  //   { title: 'Чизбургер-пицца', price: 395, urlImage: 'img/pizzas/1.png' },
  // ];

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="contentTop">
          <Categories />
          <Sort />
        </div>
        <h1>Все пиццы</h1>
        <div className="pizzas">
          {pizzas.map((item) => (
            <PizzaBlock
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              sizes={item.sizes}
              types={item.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
