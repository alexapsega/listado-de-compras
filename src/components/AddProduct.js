import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { iconMap } from '../icons';

const FormContainer = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.1em;
  margin-right: 15px;
  width: 150px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const IconSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  flex-grow: 1;
`;

const IconOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#007bff' : '#eee')};
  border-radius: 5px;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #007bff;
  }
`;

const IconComponentWrapper = styled.div`
    font-size: 2em;
`;

const IconName = styled.span`
    font-size: 0.8em;
    margin-top: 5px;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-left: 10px;

  &.primary {
    background-color: #007bff;
    color: white;
  }

  &.secondary {
    background-color: #6c757d;
    color: white;
  }
`;

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('defaultIcon');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !selectedIcon) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    addProduct({
      name,
      price: parseFloat(price),
      icon: selectedIcon,
      quantity: 1, // Por defecto se agrega con cantidad 1
    });
    navigate('/'); // Vuelve a la pantalla principal
  };

  return (
    <FormContainer>
      <FormGroup>
        <Label>Ítem:</Label>
        <IconSelector>
          {Object.entries(iconMap).map(([key, { name, component: IconComponent }]) => (
             <IconOption key={key} isSelected={selectedIcon === key} onClick={() => setSelectedIcon(key)}>
                 <IconComponentWrapper><IconComponent /></IconComponentWrapper>
                 <IconName>{name}</IconName>
             </IconOption>
          ))}
        </IconSelector>
      </FormGroup>
      <FormGroup>
        <Label>Nombre del producto:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Manzanas Rojas"
        />
      </FormGroup>
      <FormGroup>
        <Label>Precio: $</Label>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Ej: 3.50"
          step="0.01"
          min="0"
        />
      </FormGroup>
      <ButtonContainer>
        <Button className="secondary" onClick={() => navigate('/')}>Volver</Button>
        <Button className="primary" onClick={handleSubmit}>Agregar</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default AddProduct;