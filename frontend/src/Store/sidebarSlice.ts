import { createSlice } from "@reduxjs/toolkit";

const sideBar = createSlice({
  name: "SideBarSlice",
  initialState: {
    opened: true,
  },
  reducers: {
    openSideBar(state) {
      state.opened = !state.opened;
    },
  },
});
export const sidebarActions = sideBar.actions;
export default sideBar.reducer;
