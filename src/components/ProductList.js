import React from 'react';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProductList = ({ products, updateQuantity, deleteProduct }) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          updateQuantity={updateQuantity}
          deleteProduct={deleteProduct}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;