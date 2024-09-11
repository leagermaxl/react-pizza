import { Route, Routes } from 'react-router-dom';
import Loadable from 'react-loadable';

import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';
import { Loader } from './components';

const Cart = Loadable({
  loader: () => import('./Pages/Cart'),
  loading: () => <Loader />,
});

const Pizza = Loadable({
  loader: () => import('./Pages/Pizza'),
  loading: () => <Loader />,
});

const NotFound = Loadable({
  loader: () => import('./Pages/NotFound'),
  loading: () => <Loader />,
});

function App() {
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
