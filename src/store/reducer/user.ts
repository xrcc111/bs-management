import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
  reducers: {},
  extraReducers(bulider) {
    bulider.addCase(userLoginIn.fulfilled, (state: userState, { payload }) => {
      state.code = payload.code
      state.expireAt = payload.expireAt
      state.message = payload.message
      state.token = payload.token
    })
  }
})

export const userLoginIn = createAsyncThunk('userLoginIn', async (data: User) => {
  const res: userState = await loginIn(data)
  return res
})

export default userSlice.reducer


