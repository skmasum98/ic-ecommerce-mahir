import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">E-commerce</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
        </div>
      </div>
    </nav>
  )
}
