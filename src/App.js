import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AddProductScreen from './screens/AddProductScreen';

function App() {
  const [products, setProducts] = useState([
    // Datos de ejemplo iniciales
    { id: 1, name: 'Leche', price: 2.50, icon: 'milk', quantity: 1 },
    { id: 2, name: 'Pan', price: 1.80, icon: 'bread', quantity: 0 },
    { id: 3, name: 'Huevos', price: 3.00, icon: 'egg', quantity: 2 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateQuantity = (productId, newQuantity) => {
    setProducts(products.map(p =>
      p.id === productId ? { ...p, quantity: newQuantity >= 0 ? newQuantity : 0 } : p
    ));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <HomeScreen
            products={products}
            updateQuantity={updateQuantity}
            deleteProduct={deleteProduct}
          />
        } />
        <Route path="/add" element={
          <AddProductScreen addProduct={addProduct} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
