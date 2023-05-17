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
    },
    removeUserInfo: (state) => {
        state.user = null
        state.isLoggedIn = false
    }
  },
})

export const { addUserInfo, removeUserInfo } = userSlice.actions

export default userSlice.reducer