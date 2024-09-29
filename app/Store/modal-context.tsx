import React, { createContext, useContext, useState, ReactNode } from 'react';
import PropTypes from 'prop-types';

// Define the context type
interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Create the context with a default value
export const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the provider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Define prop types for ModalProvider
ModalProvider.propTypes = {
  children: PropTypes.node,
};

// Custom hook to use the ModalContext
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
