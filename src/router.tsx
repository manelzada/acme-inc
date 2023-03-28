import { Route, Routes } from 'react-router-dom';

import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import Product from './pages/Product';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:name" element={<Product />} />
    </Routes>
  );
}
