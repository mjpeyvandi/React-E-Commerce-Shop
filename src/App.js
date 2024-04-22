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
          <Route exact path="/main" element={<Home />} />
          <Route path="/main/category" element={<Products />}>
            <Route path="/main/category/:id" element={<Product />}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
