import { describe, it, expect } from "vitest";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  cartTotal,
  cartItemCount,
  type CartState,
} from "./cart";

const empty: CartState = { items: [] };

const sampleItem = {
  productId: "sofa-001",
  name: "Modern Velvet Sofa",
  price: 1299,
};

describe("addToCart", () => {
  it("adds a new item with quantity 1", () => {
    const result = addToCart(empty, sampleItem);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toEqual({ ...sampleItem, quantity: 1 });
  });

  it("increments quantity for an existing item", () => {
    const withOne = addToCart(empty, sampleItem);
    const result = addToCart(withOne, sampleItem);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].quantity).toBe(2);
  });
});

describe("removeFromCart", () => {
  it("removes an item by productId", () => {
    const withOne = addToCart(empty, sampleItem);
    const result = removeFromCart(withOne, "sofa-001");
    expect(result.items).toHaveLength(0);
  });

  it("leaves other items untouched", () => {
    let cart = addToCart(empty, sampleItem);
    cart = addToCart(cart, {
      productId: "table-001",
      name: "Oak Table",
      price: 899,
    });
    const result = removeFromCart(cart, "sofa-001");
    expect(result.items).toHaveLength(1);
    expect(result.items[0].productId).toBe("table-001");
  });
});

describe("updateQuantity", () => {
  it("updates the quantity of an item", () => {
    const withOne = addToCart(empty, sampleItem);
    const result = updateQuantity(withOne, "sofa-001", 5);
    expect(result.items[0].quantity).toBe(5);
  });

  it("removes the item when quantity is 0", () => {
    const withOne = addToCart(empty, sampleItem);
    const result = updateQuantity(withOne, "sofa-001", 0);
    expect(result.items).toHaveLength(0);
  });
});

describe("cartTotal", () => {
  it("sums price * quantity for all items", () => {
    let cart = addToCart(empty, sampleItem);
    cart = addToCart(cart, {
      productId: "table-001",
      name: "Oak Table",
      price: 899,
    });
    cart = updateQuantity(cart, "sofa-001", 2);
    expect(cartTotal(cart)).toBe(1299 * 2 + 899);
  });
});

describe("cartItemCount", () => {
  it("sums quantities", () => {
    let cart = addToCart(empty, sampleItem);
    cart = addToCart(cart, {
      productId: "table-001",
      name: "Oak Table",
      price: 899,
    });
    cart = updateQuantity(cart, "sofa-001", 3);
    expect(cartItemCount(cart)).toBe(4);
  });
});
