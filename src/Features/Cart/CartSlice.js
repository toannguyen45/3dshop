import { createSlice } from '@reduxjs/toolkit'

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
      const { item, quantity } = action.payload;

      const existingItem = state.find(i => i.id === item.id);

      if (existingItem) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        existingItem.quantity += quantity;
      } else {
        console.log("Action Payload:", action.payload); // Log payload để kiểm tra
        // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng với số lượng
        state.push({ ...item, quantity });
      }

      // Lưu giỏ hàng vào localStorage với cấu trúc đúng
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1); // Xóa item từ giỏ hàng
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem('cart', JSON.stringify(state));
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
  extraReducers: builder => { },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
