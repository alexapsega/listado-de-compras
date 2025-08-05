import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin: 0;
`;

const AddLink = styled(Link)`
  font-size: 0.9em;
  color: #888;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Lista de Compras</Title>
      <AddLink to="/add">Agregar producto +</AddLink>
    </HeaderContainer>
  );
};

export default Header;