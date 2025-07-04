import React from 'react'

function ProductCard() {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Product Title</h2>
      <p className="text-gray-700 mb-4">Product description goes here.</p>
      <span className="text-xl font-semibold">$19.99</span>
    </div>
  )
}

export default ProductCard