import CategoriesSection from '../components/home/CategoriesSection.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import InstagramGallery from '../components/home/InstagramGallery.jsx';
import Newsletter from '../components/home/Newsletter.jsx';
import ProductShowcase from '../components/home/ProductShowcase.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import { products } from '../data/products.js';

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 4);
  const bestSellers = products.filter((product) => product.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((product) => product.isNew).slice(0, 4);

  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <ProductShowcase
        eyebrow="Featured edit"
        title="Furniture selected for modern luxury living"
        description="Our most versatile pieces balance statement-making forms with materials chosen for comfort, longevity, and daily use."
        products={featuredProducts}
      />
      <ProductShowcase
        eyebrow="Best sellers"
        title="Client favorites with proven staying power"
        description="These pieces consistently anchor real homes with premium comfort, graceful scale, and timeless silhouettes."
        products={bestSellers}
      />
      <ProductShowcase
        eyebrow="New arrivals"
        title="Fresh forms, warm finishes, and refined details"
        description="Explore the newest additions to our catalog, from sculptural lighting to richly textured bedroom and dining pieces."
        products={newArrivals}
      />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <InstagramGallery />
    </>
  );
}
