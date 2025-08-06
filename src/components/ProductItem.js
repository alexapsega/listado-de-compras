import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import * as ProductIcons from '../icons/productIcons'; // Importaremos los íconos más adelante

const ItemWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-bottom: 1px solid #eee;
  transition: transform 0.3s ease;

  ${({ isSlid }) =>
    isSlid &&
    css`
      transform: translateX(-100px);
    `}
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const ProductIcon = styled.div`
  font-size: 2em;
  margin-right: 15px;
  color: #555;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`;

const ProductPrice = styled.span`
  font-size: 0.9em;
  color: #777;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button`
  background-color: #eee;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ddd;
  }
`;

const QuantityDisplay = styled.span`
  margin: 0 15px;
  font-size: 1.2em;
  min-width: 20px;
  text-align: center;
`;

const OkButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background-color: #dc3545;
  color: white;
  border: none;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ProductItem = ({ product, updateQuantity, deleteProduct }) => {
  const [tempQuantity, setTempQuantity] = useState(product.quantity);
  const [showOk, setShowOk] = useState(false);
  const isSlid = product.quantity === 0;

  const handleIncrement = () => {
    setTempQuantity(tempQuantity + 1);
    setShowOk(true);
  };

  const handleDecrement = () => {
    setTempQuantity(tempQuantity > 0 ? tempQuantity - 1 : 0);
    setShowOk(true);
  };

  const handleConfirm = () => {
    updateQuantity(product.id, tempQuantity);
    setShowOk(false);
  };

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  const IconComponent = ProductIcons[product.icon] || ProductIcons.defaultIcon;

  return (
    <ItemWrapper>
      <ItemContainer isSlid={isSlid}>
        <ProductInfo>
          <ProductIcon><IconComponent /></ProductIcon>
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          </ProductDetails>
        </ProductInfo>
        <CounterContainer>
          <CounterButton onClick={handleDecrement}><FaMinus /></CounterButton>
          <QuantityDisplay>{tempQuantity}</QuantityDisplay>
          <CounterButton onClick={handleIncrement}><FaPlus /></CounterButton>
          {showOk && <OkButton onClick={handleConfirm}>OK</OkButton>}
        </CounterContainer>
      </ItemContainer>
      {isSlid && (
        <DeleteButton onClick={handleDelete}>
          <FaTrash /> Eliminar
        </DeleteButton>
      )}
    </ItemWrapper>
  );
};

export default ProductItem;