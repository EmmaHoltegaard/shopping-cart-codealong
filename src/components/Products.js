import React from 'react'
// import useSelector to get the data from the store
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // TODO - fetch all products from the store
  const allProducts = useSelector((store) => (store.products))

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
