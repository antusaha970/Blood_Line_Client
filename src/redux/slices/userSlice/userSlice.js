import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../API/API";

const initialState = {
  user: null,
  isLoggedIn: false,
  isReady: false,
  isOldLoggedIn: false,
  isCheckingPending: true,
  languagePreference: "bangla",
};
export const fetchLoggedInUser = createAsyncThunk(
  "users/fetchLoggedInUser",
  async (email) => {
    try {
      const { data } = await client.get(`donner/singleDonor/${email}`);
      if (data.status === "successful") {
        return data.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const sendUserContactMsg = createAsyncThunk(
  "users/sendMessage",
  async (msg) => {
    try {
      const { data } = await client.post(`/sendEmail`, msg);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    addAdditionalInfo: (state, action) => {
      const {
        number,
        location,
        bloodGroup,
        name,
        alreadyRegistered,
        isAbleToDonateBlood,
      } = action.payload;
      state.user.number = number;
      state.user.location = location;
      state.user.bloodGroup = bloodGroup;
      state.user.name = name;
      state.user.isAbleToDonateBlood = isAbleToDonateBlood;
      if (!alreadyRegistered) {
        state.isReady = true;
      }
    },
    removeUserInfo: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isOldLoggedIn = false;
      state.isCheckingPending = true;
    },
    changeLanguages: (state, action) => {
      if (action.payload) {
        state.languagePreference = action.payload;
      } else {
        if (state.languagePreference === "bangla") {
          localStorage.setItem("languagePreference", "english");
          state.languagePreference = "english";
        } else {
          localStorage.setItem("languagePreference", "bangla");
          state.languagePreference = "bangla";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoggedInUser.fulfilled, (state, action) => {
      if (action.payload) {
        const { location, bloodGroup, number, name } = action.payload;
        state.user.number = number;
        state.user.location = location;
        state.user.bloodGroup = bloodGroup;
        state.user.name = name;
        state.isOldLoggedIn = true;
        state.isCheckingPending = false;
      } else {
        state.isCheckingPending = false;
      }
    });
  },
});

export const {
  addUserInfo,
  removeUserInfo,
  addAdditionalInfo,
  changeLanguages,
} = userSlice.actions;

export default userSlice.reducer;
