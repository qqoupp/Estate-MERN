import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck:false,
  })
})