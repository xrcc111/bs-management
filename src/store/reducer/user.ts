import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginIn, User } from "@/api/login"

export interface userState {
  code?: number,
  expireAt?: string,
  message?: string,
  token?: string,
}

const initialState: userState = {
  code: undefined,
  expireAt: undefined,
  message: undefined,
  token: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getUserToken: (state: userState, actions: PayloadAction<userState>) => {
    //   state.token = actions.payload.token
    // }
  },
  extraReducers(bulider) {
    bulider.addCase(userLoginIn.fulfilled, (state: userState, action: PayloadAction<userState>) => {
      state.code = action.payload.code
      state.expireAt = action.payload.expireAt
      state.message = action.payload.message
      state.token = action.payload.token
    })
  }
})

export const userLoginIn = createAsyncThunk('userLoginIn', async (data: User) => {
  const res: userState = await loginIn(data)
  return res
})

// export const { getUserToken } = userSlice.actions
export default userSlice.reducer


