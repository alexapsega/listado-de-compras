import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Total from '../components/Total';
import styled from 'styled-components';

const HomeScreenContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const HomeScreen = ({ products, updateQuantity, deleteProduct }) => {
  return (
    <HomeScreenContainer>
      <Header />
      <ProductList
        products={products}
        updateQuantity={updateQuantity}
        deleteProduct={deleteProduct}
      />
      <Total products={products} />
    </HomeScreenContainer>
  );
};

export default HomeScreen;