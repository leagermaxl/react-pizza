import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';

function Home() {
  const [itemsPizzas, setItemsPizzas] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://683883f38da35f95.mokky.dev/items');
        console.log(data);
        setItemsPizzas(data);
      } catch (error) {
        console.error(error);
        alert('Не удалось загрузить пиццы!');
      }
    })();
  }, []);

  return (
    <>
      <div className="contentTop">
        <Categories />
        <Sort />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizzas">
        {itemsPizzas.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Home;
