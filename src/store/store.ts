import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Export types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
