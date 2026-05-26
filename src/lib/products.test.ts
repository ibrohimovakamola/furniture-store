import { describe, it, expect } from "vitest";
import { products, getProduct, formatPrice } from "./products";

describe("products", () => {
  it("has at least one product", () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it("each product has required fields", () => {
    for (const p of products) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.price).toBeGreaterThan(0);
      expect(p.category).toBeTruthy();
    }
  });
});

describe("getProduct", () => {
  it("returns the product by id", () => {
    const p = getProduct("sofa-001");
    expect(p).toBeDefined();
    expect(p?.name).toBe("Modern Velvet Sofa");
  });

  it("returns undefined for unknown id", () => {
    expect(getProduct("nope")).toBeUndefined();
  });
});

describe("formatPrice", () => {
  it("formats a whole number price", () => {
    expect(formatPrice(1299)).toBe("$1,299");
  });
});
