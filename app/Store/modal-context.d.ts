declare module 'modal-context' {
    import { ReactNode } from 'react';
  
    export interface ModalContextType {
      isModalOpen: boolean;
      openModal: () => void;
      closeModal: () => void;
    }
  
    export const ModalProvider: ({ children }: { children: ReactNode }) => JSX.Element;
    export const useModal: () => ModalContextType;
  }
  