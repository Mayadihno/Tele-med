// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      // Convert timestamp to Date object
      const userDataWithDate = {
        ...action.payload,
        timestamp: action.payload.timestamp?.toDate(),
      };
      state.userData = userDataWithDate;
    },

    clearUserData: (state) => {
      state.userData = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
