import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componets/Navbar";

import ScrollTop from "./Componets/ScrollTop";
import { ContextApi } from "./ContextApi/ContextApi";

const Home = lazy(() => import("./Componets/Home"));
const Cart = lazy(() => import("./Componets/Cart"));
const Products = lazy(() => import("./Componets/Products"));

const ProtectRoute = lazy(() => import("./Componets/ProtectRoute"));

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="Products" element={<Products />} />

            <Route
              path="cartItems"
              element={<ProtectRoute element={<Cart />} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;
