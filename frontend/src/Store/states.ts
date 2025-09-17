import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./sidebarSlice";
import SearchReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    sidebarReducer: SideBarReducer,
    searchReducer: SearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
