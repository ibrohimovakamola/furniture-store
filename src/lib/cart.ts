export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export function addToCart(
  cart: CartState,
  item: Omit<CartItem, "quantity">,
): CartState {
  const existing = cart.items.find((i) => i.productId === item.productId);
  if (existing) {
    return {
      items: cart.items.map((i) =>
        i.productId === item.productId
          ? { ...i, quantity: i.quantity + 1 }
          : i,
      ),
    };
  }
  return { items: [...cart.items, { ...item, quantity: 1 }] };
}

export function removeFromCart(
  cart: CartState,
  productId: string,
): CartState {
  return { items: cart.items.filter((i) => i.productId !== productId) };
}

export function updateQuantity(
  cart: CartState,
  productId: string,
  quantity: number,
): CartState {
  if (quantity <= 0) return removeFromCart(cart, productId);
  return {
    items: cart.items.map((i) =>
      i.productId === productId ? { ...i, quantity } : i,
    ),
  };
}

export function cartTotal(cart: CartState): number {
  return cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function cartItemCount(cart: CartState): number {
  return cart.items.reduce((sum, i) => sum + i.quantity, 0);
}
