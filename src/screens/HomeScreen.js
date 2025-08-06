import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Total from '../components/Total';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const HomeScreenContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const GenerateButton = styled.button`
  margin-top: 16px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const HomeScreen = ({ products, updateQuantity, deleteProduct }) => {
  const printRef = useRef(null);
  const handleGeneratePdf = async () => {
  if (!printRef.current) return;
  // 1) Capturar la sección como canvas
  const canvas = await html2canvas(printRef.current, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  // 2) Crear documento PDF
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
   // 3) Calcular dimensiones para que encaje en A4
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const imgProps = pdf.getImageProperties(imgData);
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  // 4) Agregar la imagen al PDF
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  // 5) Abrir en nueva pestaña
  const blobUrl = pdf.output('bloburl');
  window.open(blobUrl, '_blank');
};
  return (
    <HomeScreenContainer ref={printRef}>
      <Header />
      <ProductList
        products={products}
        updateQuantity={updateQuantity}
        deleteProduct={deleteProduct}
      />
      <Total products={products} />
      <GenerateButton onClick={handleGeneratePdf}>
          Generar PDF
      </GenerateButton>
    </HomeScreenContainer>
  );
};

export default HomeScreen;