import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: 'tempesto20',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      // const findItem = state.searchValue.find((object) => object.id === action.payload.id);
      // //console.log(findItem.items);
      // //поиск объекта в массиве
      // if (findItem) {
      //   //Если в массиве уже имеется данный объект, то увелись его значение на +1
      //   state.searchValue = action.payload;
      //   //console.log(findItem);
      //   //state.items.push(action.payload);
      // } else {
      //   //Если в массиве данного объект не имеется, то будем добавлять
      //   return;
      // }

      // const findItem = state.searchValue;
      // for (let i = 0; i < state.searchValue.length; i++) {
      //   if (findItem.trim().length > 0) {
      //     state.searchValue = action.payload;
      //   } else {
      //     state.searchValue = action.payload;
      //   }
      // }
      // if (findItem) {
      //   state.searchValue = action.payload;
      // } else {
      // }

      // // state.searchValue.trim();
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
