import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "@/protected";
import Cart from "@/pages/cart-item-page/cart";
import Dashboard from "@/pages/homepage/dashboard";

import ProductList from "@/pages/product-list/product-list";
import Footer from "./components/footer/footer";
import Navbar from "./components/hearder/navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <main>
          <Routes>
            {/* <Route path="/vendor-login" element={<VendorLogin />}></Route> */}
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
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
