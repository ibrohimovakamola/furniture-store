"use client";

import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  useCallback,
} from "react";
import {
  type CartState,
  type CartItem,
  addToCart,
  removeFromCart,
  updateQuantity,
  cartTotal,
  cartItemCount,
} from "./cart";

type CartAction =
  | { type: "ADD"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; productId: string }
  | { type: "UPDATE_QTY"; productId: string; quantity: number }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD":
      return addToCart(state, action.item);
    case "REMOVE":
      return removeFromCart(state, action.productId);
    case "UPDATE_QTY":
      return updateQuantity(state, action.productId, action.quantity);
    case "CLEAR":
      return { items: [] };
  }
}

interface CartContextValue {
  cart: CartState;
  total: number;
  itemCount: number;
  add: (item: Omit<CartItem, "quantity">) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const add = useCallback(
    (item: Omit<CartItem, "quantity">) => dispatch({ type: "ADD", item }),
    [],
  );
  const remove = useCallback(
    (productId: string) => dispatch({ type: "REMOVE", productId }),
    [],
  );
  const setQuantity = useCallback(
    (productId: string, quantity: number) =>
      dispatch({ type: "UPDATE_QTY", productId, quantity }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  return (
    <CartContext.Provider
      value={{
        cart,
        total: cartTotal(cart),
        itemCount: cartItemCount(cart),
        add,
        remove,
        setQuantity,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
