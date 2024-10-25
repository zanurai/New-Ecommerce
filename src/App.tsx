import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import VendorLogin from "./pages/login/vender-login";
import Dashboard from "./pages/homepage/dashboard";
import ProductList from "./pages/product-list/product-list";
import Cart from "./pages/cart-item-page/cart";
import ProtectedRoute from "./protected";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/vendor-login" element={<VendorLogin />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product" element={<ProductList />}></Route>

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
