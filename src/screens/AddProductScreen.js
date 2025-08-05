import React from 'react';
import AddProduct from '../components/AddProduct';
import styled from 'styled-components';

const AddScreenContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
`;

const AddProductScreen = ({ addProduct }) => {
  return (
    <AddScreenContainer>
      <AddProduct addProduct={addProduct} />
    </AddScreenContainer>
  );
};

export default AddProductScreen;