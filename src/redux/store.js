import { configureStore } from '@reduxjs/toolkit';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import filterSlice from './slices/filterSlice';
import personSlice from './slices/personSlice';
import repositoriesSlice from './slices/repositoriesSlice';
import commitSlice from './slices/commitSlice';

// // combineReducers - неолбходим для подключения нескольких слайсов
// const rootReducer = combineReducers({
//   filterSlice,
//   personSlice,
//   repositoriesSlice,
//   commitSlice,
// });

// // Конфиг - ключ / знаечний, временное хранилище
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// // Персистированный редюсер
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Теперь тут не описывается редюсер, а передаётся заранее подготовленный из комбайна rootReducer => persistedReducer
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    filterSlice,
    personSlice,
    repositoriesSlice,
    commitSlice,
  },
});
