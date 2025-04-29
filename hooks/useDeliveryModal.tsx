import { create } from 'zustand';

interface DeliveryModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeliveryModal = create<DeliveryModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeliveryModal;
