import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import personSlice from './slices/personSlice';
import repositoriesSlice from './slices/repositoriesSlice';
import commitSlice from './slices/commitSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    personSlice,
    repositoriesSlice,
    commitSlice,
  },
});
