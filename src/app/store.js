import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' 
import {combineReducers} from "redux";
import productsSlice from './slices/productsSlice';
import categoriesSlice from './slices/categoriesSlice';
import cartSlice from './slices/cartSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['cart']
}

const cartersistConfig = {
  key: 'cart',
  storage: storage,
  blacklist: ['isLoaded']
}

const rootReducer = combineReducers({
    products: productsSlice,
    categories: categoriesSlice,
    cart: persistReducer(cartersistConfig, cartSlice)
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
