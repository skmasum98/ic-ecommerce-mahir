import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import loadProducts from '../../redux/features/productsSlice';

export default function ProductList() {

    const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
     <div>
      <h1>Products</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} width={150} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
