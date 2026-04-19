import { create } from "zustand";

type Color = {
  id: string;
  name: string;
};

type CartStoreItem = {
  productId: string;
  name: string;
  color: Color;
  size: string;
  price: number;
  qty: number;
  image: string;
};

type CartStore = {
  items: CartStoreItem[];
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  addItem: (item: CartStoreItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  updateQty: (id, qty) =>
    set((state) => ({
      items: state.items.map((item) =>
        `${item.productId}-${item.color.id}-${item.size}` === id
          ? { ...item, qty }
          : item
      ),
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter(
        (item) => `${item.productId}-${item.color.id}-${item.size}` !== id
      ),
    })),
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}));