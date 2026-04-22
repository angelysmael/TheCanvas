"use client";

import { useState } from "react";

export default function MainPage() {
  // state for search input
  const [searchTerm, setSearchTerm] = useState("");

  // state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // state for selected product
  const [selectedProduct, setSelectedProduct] = useState("");

  // sample product data
  const products = [
    { id: 1, name: "Canvas Tote Bag", category: "Bags" },
    { id: 2, name: "Canvas Sneakers", category: "Shoes" },
    { id: 3, name: "Canvas Jacket", category: "Clothing" },
    { id: 4, name: "Canvas Backpack", category: "Bags" },
    { id: 5, name: "Canvas Slip-Ons", category: "Shoes" },
    { id: 6, name: "Canvas Pants", category: "Clothing" },
  ];

  // filter products by search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">Main Page</h1>
      <p className="mb-6 text-gray-600">
        This page shows simple state management using search, filtering, and
        product selection.
      </p>

      {/* search input */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Search Products</label>
        <input
          type="text"
          placeholder="Type a product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border rounded-md p-3"
        />
      </div>

      {/* category dropdown */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Filter by Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full max-w-md border rounded-md p-3"
        >
          <option value="All">All</option>
          <option value="Bags">Bags</option>
          <option value="Shoes">Shoes</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      {/* product list */}
      <div className="grid gap-4 max-w-2xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-md p-4 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-3">
                Category: {product.category}
              </p>

              <button
                onClick={() => setSelectedProduct(product.name)}
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Select Product
              </button>
            </div>
          ))
        ) : (
          <p className="text-red-500">No products found.</p>
        )}
      </div>

      {/* selected product message */}
      {selectedProduct && (
        <div className="mt-8 p-4 border rounded-md bg-gray-50 max-w-md">
          <p className="font-medium">
            Selected Product: <span className="text-blue-600">{selectedProduct}</span>
          </p>
        </div>
      )}
    </main>
  );
}