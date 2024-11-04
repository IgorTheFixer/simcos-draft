import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';

interface CartStore {
  items: Product[] | any[];
  calculateTotal: () => void;
  calculateTax: () => void;
  calculateFinal: () => void;
  taxAmount: Number | any;
  addItem: (data: any) => void;
  updateItem: (data: any, newQuantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  cartTotal: Number | any;
  finalAmount: Number | any
}

const useCart = create(
  persist<CartStore>((set, get) => ({
  cartTotal: 0,
  items: [],
  taxAmount: 0,
  finalAmount: 0,
  calculateFinal: () => {
    const cartTotal = get().cartTotal
    const taxAmount = get().taxAmount
    const finalAmount = cartTotal + taxAmount
    set({ finalAmount: finalAmount })
  },
  calculateTotal: () => {
    const currentItems = get().items
    const totalPrice = currentItems.reduce((total, item) => {
      //@ts-ignore 
      return total + (Number(item.price) * item.quantity)
      //@ts-ignore
    }, 0);
    set({ cartTotal: totalPrice })
  },
  calculateTax: () =>{
    const cartTotal = get().cartTotal
    const taxAmount = cartTotal * 0.0625
    set({ taxAmount: taxAmount})
  },
  updateItem: (data: any, newQuantity: number) => {
    console.log("Information to be updated",data)
    const uniqueId = data.uniqueId
    const newData = {...data, quantity: newQuantity}
    set({ items: [...get().items.filter((item) => item.uniqueId !== uniqueId)] });
    const currentItems = get().items;
    set({ items: [...currentItems, newData] });
    get().calculateTotal();  // Recalculate total after adding
    get().calculateTax()
    get().calculateFinal()
    toast.success('Item Updated!');   
  },
  addItem: (data: any) => {
    console.log(data)
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    console.log(existingItem)
    //TODO: Add this back ASAP once finished with add-ons
    // if (existingItem) {
    //   return toast('Item already in cart.');
    // }

    set({ items: [...currentItems, data] });
    toast.success('Item added to cart.');
    get().calculateTotal();  // Recalculate total after adding
    get().calculateTax()
    get().calculateFinal()
  },
  removeItem: (uniqueId: string) => {
    set({ items: [...get().items.filter((item) => item.uniqueId !== uniqueId)] });
    toast.success('Item removed from cart.');
    get().calculateTotal();  // Recalculate total after removing
    get().calculateTax()
    get().calculateFinal()
  },
  removeAll: () => {
    set({ items: [] });
    toast.success('All items removed.');
    get().calculateTotal();  // Recalculate total after clearing
    get().calculateTax()
    get().calculateFinal()
  },
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;