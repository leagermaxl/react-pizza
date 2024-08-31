import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const [pizza, setPizza] = React.useState();
  const params = useParams();

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://683883f38da35f95.mokky.dev/items/${params.id}`);
      setPizza(data);
    })();
  }, [params.id]);

  if (pizza === undefined) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>{pizza.price}</p>
    </div>
  );
};

export default Pizza;
