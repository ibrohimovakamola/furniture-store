import { Route, Routes } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import CartPage from '../pages/CartPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import ProductDetailsPage from '../pages/ProductDetailsPage.jsx';
import ProductsPage from '../pages/ProductsPage.jsx';
import WishlistPage from '../pages/WishlistPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
