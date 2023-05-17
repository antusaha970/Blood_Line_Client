import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state,action) => {
        state.user = action.payload
        state.isLoggedIn = true
        // state.user.email = "xyz@gmail.com"
    },
    addAdditionalInfo: (state,action) => {
        const {number,location,bloodGroup,name} = action.payload;
        state.user.number = number;
        state.user.location = location;
        state.user.bloodGroup = bloodGroup;
        state.user.name = name;
    },
    removeUserInfo: (state) => {
        state.user = null
        state.isLoggedIn = false
    },
  },
})

export const { addUserInfo, removeUserInfo,addAdditionalInfo } = userSlice.actions

export default userSlice.reducer