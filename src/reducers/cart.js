import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  // set up actions in the reducer
  reducers: {
    addItem: (state, action) => {
      console.log(action)
      // Finds out if an item has already been added before:
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      // If product's already been added, add value +1 to quantity instead:
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
      // Otherwise, push in the item to state + add a quantity-key.
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      // checks if product is already in cart (it should be)
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      // if the product already exists, and quantity is 1:
      // return a new array, where the item is filtered out.
      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
        // if product already exists in quantity > 1, remove 1.
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})