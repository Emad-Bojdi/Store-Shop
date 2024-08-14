import { Routes, Route, Navigate } from "react-router-dom";

import { ProductsPage } from "./pages/ProductsPage";
import { DetailsProductPage } from "./pages/DetailsProductPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ErrorNotFoundPage } from "./pages/ErrorNotFoundPage";

import ProductProvider from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

import { Layout } from "./layouts/Layout";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Layout>
          <Routes >
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<ErrorNotFoundPage />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
