import React from 'react'
import ProductList from '../Components/Product/ProductList'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-commerce Store</h1>
      <p className="text-lg text-gray-700 mb-8">Discover amazing products and deals!</p>
      <ProductList />
    </div>
  )
}
