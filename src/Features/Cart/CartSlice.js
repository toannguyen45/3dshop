import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Lấy state giỏ hàng từ localStorage, nếu có
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart')
  return savedCart ? JSON.parse(savedCart) : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.find(i => i.id === item.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ ...item, quantity: 1 })
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.id !== action.payload)

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart))

      return updatedCart
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.find(i => i.id === id)
      if (item) {
        item.quantity = quantity
        if (item.quantity <= 0) {
          return state.filter(i => i.id !== id)
        }
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
  extraReducers: builder => {},
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
