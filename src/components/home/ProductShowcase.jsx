import Button from '../common/Button.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import ProductGrid from '../product/ProductGrid.jsx';

export default function ProductShowcase({ eyebrow, title, description, products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={
          <Button as="link" to="/products" variant="secondary">
            View all products
          </Button>
        }
      />
      <ProductGrid products={products} />
    </section>
  );
}
