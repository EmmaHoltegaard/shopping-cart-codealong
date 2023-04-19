import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
// import reducers
import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

// combine reducer-slices into a single reducer
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

// use the reducer to create the store:
const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
