/* eslint-disable no-useless-catch */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoggedIn: false,
  isReady: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state,action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.user.email = "xyuz@gmail.com"
    },
    addAdditionalInfo: (state,action) => {
        const {number,location,bloodGroup,name} = action.payload;
        state.user.number = number;
        state.user.location = location;
        state.user.bloodGroup = bloodGroup;
        state.user.name = name;
        state.isReady = true;
    },
    removeUserInfo: (state) => {
        state.user = null
        state.isLoggedIn = false
    },
  },
})

export const { addUserInfo, removeUserInfo,addAdditionalInfo } = userSlice.actions

export default userSlice.reducer