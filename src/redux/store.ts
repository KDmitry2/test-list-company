import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appSlice} from "./slice/app";



const reducer = combineReducers({
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
