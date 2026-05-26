import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const StoreContext = createContext(null);

const STORAGE_KEY = 'maison-luxe-store';

const getInitialState = () => {
  if (typeof window === 'undefined') {
    return { cart: [], wishlist: [], darkMode: false };
  }

  try {
    const savedState = window.localStorage.getItem(STORAGE_KEY);
    return savedState
      ? JSON.parse(savedState)
      : { cart: [], wishlist: [], darkMode: false };
  } catch {
    return { cart: [], wishlist: [], darkMode: false };
  }
};

export function StoreProvider({ children }) {
  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    document.documentElement.classList.toggle('dark', state.darkMode);
  }, [state]);

  const addToCart = (product, quantity = 1) => {
    setState((current) => {
      const existingItem = current.cart.find((item) => item.id === product.id);
      const cart = existingItem
        ? current.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [
            ...current.cart,
            {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.images[0],
              category: product.category,
              quantity,
            },
          ];

      return { ...current, cart };
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    setState((current) => ({
      ...current,
      cart:
        quantity < 1
          ? current.cart.filter((item) => item.id !== productId)
          : current.cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            ),
    }));
  };

  const removeFromCart = (productId) => {
    setState((current) => ({
      ...current,
      cart: current.cart.filter((item) => item.id !== productId),
    }));
  };

  const clearCart = () => {
    setState((current) => ({ ...current, cart: [] }));
  };

  const toggleWishlist = (product) => {
    setState((current) => {
      const isWishlisted = current.wishlist.some((item) => item.id === product.id);
      const wishlist = isWishlisted
        ? current.wishlist.filter((item) => item.id !== product.id)
        : [
            ...current.wishlist,
            {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.images[0],
              category: product.category,
              rating: product.rating,
            },
          ];

      return { ...current, wishlist };
    });
  };

  const toggleDarkMode = () => {
    setState((current) => ({ ...current, darkMode: !current.darkMode }));
  };

  const cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);
  const wishlistCount = state.wishlist.length;
  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 && subtotal < 2000 ? 129 : 0;
  const tax = subtotal * 0.0825;
  const total = subtotal + shipping + tax;

  const value = useMemo(
    () => ({
      cart: state.cart,
      wishlist: state.wishlist,
      darkMode: state.darkMode,
      cartCount,
      wishlistCount,
      subtotal,
      shipping,
      tax,
      total,
      addToCart,
      clearCart,
      removeFromCart,
      toggleDarkMode,
      toggleWishlist,
      updateCartQuantity,
    }),
    [state, cartCount, wishlistCount, subtotal, shipping, tax, total],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore must be used inside StoreProvider');
  }

  return context;
};
