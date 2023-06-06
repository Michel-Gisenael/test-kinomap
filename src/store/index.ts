import { configureStore } from '@reduxjs/toolkit'
import { Store } from 'redux';
import videoSlice from './videoSlice';

/**
 * Configuring the redux store
 * In each context we set a file selector for selecting withc state to get,
 */

export const store: Store = configureStore({
  reducer: {
    video: videoSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch