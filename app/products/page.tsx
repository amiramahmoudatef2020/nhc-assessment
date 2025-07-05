'use client';

import { useSearchProducts } from '../../hooks/useSearchProducts';
import { searchProducts } from '../../lib/api/products';
import ProductCard from '../../components/product-card/ProductCard';
import { Search } from 'lucide-react';
import NoFoundData from '../../components/no-found-data/NoFoundData';

import './SearchBar.css'; // Assuming you have a CSS file for styling
import { ChangeEvent, useState } from 'react';
export default function ProductsPage() {
  const { results, search, setSearch, loading } =
    useSearchProducts(searchProducts);
  const [isSearchStarted, setSearchStartStatus] = useState(false);


  function onInputValueChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    if(e.target.value.length > 0) {
      setSearchStartStatus(true);
    } else {
      setSearchStartStatus(false);
    }
  }
    

  return (
    <div className={`search-page-container row mx-0 justify-content-center align-content-center ${results.length > 0 ? 'py-5' : ''}`}>
      <div className="search-input-field col-12 col-sm-10 col-md-6">
        <label className="search-label">Search products by keyword</label>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search keyword"
            value={search}
            className="search-input"
            onChange={(e) => onInputValueChange(e)}
          />
          <button type="submit" className="search-button" aria-label="Search">
            <Search className="search-icon" />
          </button>
        </div>
        <div className="row mx-0 justify-content-center mt-3 px-0">
            {loading && <p>Loading...</p>}
            {!loading && search.length > 0 && (<span className='products-count-label px-0'>Total results count: <span className='products-count'>{results.length}</span></span>)}
            {!loading && isSearchStarted && results.length == 0 ? <NoFoundData></NoFoundData>: ''}
        </div>
      </div>


      <div className="product-grid row mx-0 justify-content-center mt-5 col-12 col-xl-10">
        {results.map((product) => (
          <div key={product.id} className='col-auto px-0'>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
