import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductStore from '../components/store/useProductStore';

const CategoryProduct = () => {
  const { categorySlug } = useParams(); // Extract category from URL
  const { products } = useProductStore();

  // Default categorySlug to an empty string if it's undefined
  const safeCategorySlug = categorySlug || '';

  // Extract the first word before the space
  const [firstWord] = safeCategorySlug.split(' ');

  // Filter products by the first word of the category
  const filteredProducts = products.filter(product => {
    const [productFirstWord] = product.category.split(' ');
    return productFirstWord === firstWord;
  });

  return (
    <div className="bg-gray-50">
      {/* Main Content Section */}
      <main className="pt-10 px-4 md:px-8 pb-6"> {/* Adjusted top padding */}
        <div className="container mx-auto flex gap-6">
          {/* Sidebar for Filters (optional) */}
          <aside className="w-64 hidden md:block">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              {/* Add filter options here */}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Category: {safeCategorySlug}</h1>
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex space-x-2 text-gray-600">
                <li><Link to="/" className="hover:text-green-600">Home</Link></li>
                <li>&gt;</li>
                <li className="font-semibold text-gray-800">{safeCategorySlug}</li>
              </ol>
            </nav>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <span className="block text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No products found in this category.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryProduct;
