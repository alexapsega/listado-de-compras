import React from 'react';
import styled from 'styled-components';

const TotalContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #333;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const TotalAmount = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const Total = ({ products }) => {
  const calculateTotal = () => {
    return products
      .filter(p => p.quantity >= 1)
      .reduce((sum, product) => sum + product.price * product.quantity, 0);
  };

  return (
    <TotalContainer>
      <TotalText>Total:</TotalText>
      <TotalAmount>
        $
        {new Intl.NumberFormat('es-AR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(calculateTotal())}
      </TotalAmount>
    </TotalContainer>
  );
};

export default Total;