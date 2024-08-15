import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

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
        <Routes>
          <Route path="react-pizza/" element={<Home />} />
          <Route path="react-pizza/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
