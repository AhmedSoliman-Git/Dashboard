import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./sidebarSlice";
const store = configureStore({
  reducer: {
    sidebarReducer: SideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
