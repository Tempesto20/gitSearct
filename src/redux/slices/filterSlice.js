import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      // const findItem = state.searchValue.find((value) => value.trim());
      // if (findItem) {
      // } else {
      //   state.searchValue = action.payload;
      // }

      // state.searchValue.trim();
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
