import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.items.filter((item) => item.id !== action.payload);
    },
    clearProduct(state, action) {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearProduct } = cartSlice.actions;

export default cartSlice.reducer;
