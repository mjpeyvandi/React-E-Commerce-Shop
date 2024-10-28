import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppLayout } from "./ui/AppLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:style" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:style/:category" element={<Products />} />
          <Route path="/products/onsale" element={<Products />} />
          <Route path="/products/new" element={<Products />} />
          <Route path="/products/product/:name/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
