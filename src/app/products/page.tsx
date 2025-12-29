'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/slices/cartSlice';
import { filterByCategory } from '@/redux/slices/productsSlice';
import { Button } from 'rizzui';
import { categories } from '@/data/mockData';
import toast from 'react-hot-toast';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { filteredProducts, selectedCategory } = useAppSelector((state) => state.products);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategoryFilter(value);
    dispatch(filterByCategory(value === 'all' ? null : value));
  };

  const handleAddToCart = (product: any) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSizes[product.id],
      color: selectedColors[product.id],
      category: product.category,
    };

    dispatch(addToCart(cartItem));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 text-white mb-4">Our Products</h1>
            <p className="text-xl text-blue-100">
              Discover our premium collection of fashion items
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}` : 'All Products'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredProducts.length} products found
              </p>
            </div>

            {/* Category Filter */}
            <div className="w-full sm:w-64">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={handleCategoryChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="product-card group"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-t-xl overflow-hidden">
                  <img 
                    src={product.category === 'clothing' 
                      ? `https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80`
                      : product.category === 'shoes'
                      ? `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80`
                      : `https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80`
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="badge-sale">{product.badge}</span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Size Selection */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-3">
                      <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                        Size
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.slice(0, 4).map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                            className={`px-3 py-1 text-xs rounded border transition-colors ${
                              selectedSizes[product.id] === size
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-300 hover:border-blue-600'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color Selection */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mb-3">
                      <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                        Color
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.slice(0, 4).map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColors({ ...selectedColors, [product.id]: color })}
                            className={`px-3 py-1 text-xs rounded border transition-colors ${
                              selectedColors[product.id] === color
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-300 hover:border-blue-600'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-4 btn-primary"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
