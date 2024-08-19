import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

export const AppContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  // console.log(searchValue);

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
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
    </AppContext.Provider>
  );
}

export default App;
