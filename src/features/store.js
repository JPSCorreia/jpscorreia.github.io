import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from './dataSlice';

const store = configureStore({
  reducer: dataSliceReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false, immutableCheck: false})
})

export default store;
