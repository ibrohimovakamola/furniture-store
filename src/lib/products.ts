export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "living-room" | "bedroom" | "dining" | "office";
}

export const products: Product[] = [
  {
    id: "sofa-001",
    name: "Modern Velvet Sofa",
    description:
      "A luxurious three-seater sofa upholstered in soft velvet fabric with solid wood legs.",
    price: 1299,
    image: "/images/sofa.svg",
    category: "living-room",
  },
  {
    id: "table-001",
    name: "Oak Dining Table",
    description:
      "Handcrafted solid oak dining table that seats six. Clean lines and a natural finish.",
    price: 899,
    image: "/images/table.svg",
    category: "dining",
  },
  {
    id: "chair-001",
    name: "Ergonomic Office Chair",
    description:
      "Adjustable mesh-back chair with lumbar support and breathable fabric. Perfect for long work sessions.",
    price: 549,
    image: "/images/chair.svg",
    category: "office",
  },
  {
    id: "bed-001",
    name: "Platform Bed Frame",
    description:
      "Minimalist queen-size platform bed in walnut. No box spring required.",
    price: 749,
    image: "/images/bed.svg",
    category: "bedroom",
  },
  {
    id: "bookshelf-001",
    name: "Industrial Bookshelf",
    description:
      "Five-tier bookshelf with reclaimed wood shelves and black steel frame.",
    price: 399,
    image: "/images/bookshelf.svg",
    category: "living-room",
  },
  {
    id: "lamp-001",
    name: "Arc Floor Lamp",
    description:
      "Contemporary brushed-brass arc lamp with a linen drum shade. Adds warmth to any room.",
    price: 249,
    image: "/images/lamp.svg",
    category: "living-room",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return `$${cents.toLocaleString("en-US")}`;
}
