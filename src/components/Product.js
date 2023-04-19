import React from 'react'
// import useDispatch + reducer(s)
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
  // initialies dispatch
  const dispatch = useDispatch()

  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        disabled={product.inventory === 0}
        // on click, dispath the action 'addItem' and pass product-prop as payload
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
      </button>
    </article>
  )
}
