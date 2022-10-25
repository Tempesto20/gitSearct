import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import personSlice from './slices/personSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    personSlice,
  },
});
