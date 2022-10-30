import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type SearchProps = {
  //type - можно передать что угодно, как константа для TS
  searchValue: string;
};


const initialState = {
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      // // state.searchValue.trim();
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
