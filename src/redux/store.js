import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import personSlice from './slices/personSlice';
import repositoriesSlice from './slices/repositoriesSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    personSlice,
    repositoriesSlice,
  },
});
