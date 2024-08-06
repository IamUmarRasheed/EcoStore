import {create}from 'zustand';


const useProductStore = create((set) => ({
  products: [],
  cart: [],
  isOpen: false,
  setProducts: (products) => set({ products }),
  
  addToCart: (product) =>
    set((state) => {
  
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
     
        return { cart: updatedCart };
      }
      const newCart = [...state.cart, { ...product, quantity: 1 }];
    
      return { cart: newCart };
    }),
  
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  incrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

export default useProductStore;
