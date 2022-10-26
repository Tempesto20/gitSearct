import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      //console.log(action);
      // state.searchValue.filter((object) => object.trim());
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
