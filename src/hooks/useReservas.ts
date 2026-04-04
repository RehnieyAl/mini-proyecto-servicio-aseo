import { useContext } from 'react';
import { ReservaContext } from '../context/ReservaContext';

export const useReservas = () => {
  const context = useContext(ReservaContext);
  if (!context) {
    throw new Error('useReservas debe usarse dentro de ReservaProvider');
  }
  return context;
};