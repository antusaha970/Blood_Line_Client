import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  isReady: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    addAdditionalInfo: (state, action) => {
      const { number, location, bloodGroup, name, alreadyRegistered } =
        action.payload;
      state.user.number = number;
      state.user.location = location;
      state.user.bloodGroup = bloodGroup;
      state.user.name = name;
      if (!alreadyRegistered) {
        state.isReady = true;
      }
    },
    removeUserInfo: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { addUserInfo, removeUserInfo, addAdditionalInfo } =
  userSlice.actions;

export default userSlice.reducer;
