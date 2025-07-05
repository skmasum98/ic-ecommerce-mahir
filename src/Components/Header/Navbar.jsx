import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">THEWEBPAL</Link>
        <div className="space-x-4">
          <Link to="/" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Home</Link>
          <Link to="/products" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Products</Link>
          <Link to="/cart" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Cart</Link>
        </div>
      </div>
    </nav>
  )
}
