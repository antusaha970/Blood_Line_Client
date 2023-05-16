import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../slices/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})