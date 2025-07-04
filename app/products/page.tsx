'use client';

import { useSearchProducts } from '../../hooks/useSearchProducts';
import { searchProducts } from '../../lib/api/products';
import ProductCard from '../../components/ProductCard';
import { Search } from 'lucide-react';
import './SearchBar.css'; // Assuming you have a CSS file for styling
export default function ProductsPage() {
  const { results, search, setSearch, loading } =
    useSearchProducts(searchProducts);

  return (
    <div className="search-section">
      <h1 className="search-title">Search products by keyword</h1>
      <div className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button" aria-label="Search">
          <Search className="search-icon" />
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && results.length === 0 && <p>No products found.</p>}

      <div className="product-grid">
        {results.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
