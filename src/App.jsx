import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Pizza from './Pages/Pizza';

// export const AppContext = React.createContext();

function App() {
  // const [searchValue, setSearchValue] = React.useState('');
  // console.log(searchValue);

  return (
    <Routes>
      <Route path="react-pizza/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path=":id" element={<Pizza />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
