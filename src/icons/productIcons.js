import React from 'react';
import {
  FaAppleAlt,
  FaShoppingBasket,
  FaCarrot,
  FaFish,
  FaCheese,
  FaWineBottle,
  FaIceCream,
  FaCookieBite,
  FaDrumstickBite,
  FaGlassMartiniAlt,
  FaQuestionCircle
} from 'react-icons/fa';
import { GiMilkCarton, GiSlicedBread, GiChickenOven, GiWaterBottle, GiPaperBagOpen, GiSoap } from 'react-icons/gi';

export const milk = () => <GiMilkCarton />;
export const bread = () => <GiSlicedBread />;
export const egg = () => <FaShoppingBasket />; // Placeholder, no hay un buen ícono de huevo solo
export const apple = () => <FaAppleAlt />;
export const carrot = () => <FaCarrot />;
export const fish = () => <FaFish />;
export const cheese = () => <FaCheese />;
export const wine = () => <FaWineBottle />;
export const chicken = () => <GiChickenOven />;
export const water = () => <GiWaterBottle />;
export const paper = () => <GiPaperBagOpen />;
export const soap = () => <GiSoap />;
export const icecream = () => <FaIceCream />;
export const cookie = () => <FaCookieBite />;
export const meat = () => <FaDrumstickBite />;
export const drink = () => <FaGlassMartiniAlt />;
export const defaultIcon = () => <FaQuestionCircle />;

// Mapeo para la pantalla de selección
export const iconMap = {
  milk: { name: 'Leche', component: milk },
  bread: { name: 'Pan', component: bread },
  egg: { name: 'Huevos', component: egg },
  apple: { name: 'Manzana', component: apple },
  carrot: { name: 'Zanahoria', component: carrot },
  fish: { name: 'Pescado', component: fish },
  cheese: { name: 'Queso', component: cheese },
  wine: { name: 'Vino', component: wine },
  chicken: { name: 'Pollo', component: chicken },
  water: { name: 'Agua', component: water },
  paper: { name: 'Papel', component: paper },
  soap: { name: 'Jabón', component: soap },
};