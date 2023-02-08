import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  sort: {
    name: 'популярности ↓',
    sortProperty: '-rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
