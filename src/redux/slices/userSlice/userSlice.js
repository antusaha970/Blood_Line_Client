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
  },
})

export const { addUserInfo,  } = userSlice.actions

export default userSlice.reducer