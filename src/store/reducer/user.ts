import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginIn, User } from "@/api/login"

export interface userState {
  code?: number,
  expireAt?: string,
  message?: string,
  token?: string,
}

const initialState = {
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
    bulider.addCase(userLoginIn.fulfilled, (state, { payload }) => {
      console.log(payload)
    })
  }
})

export const userLoginIn = createAsyncThunk('userLoginIn', async (data: User) => {
  const res = await loginIn(data)
  return res
})

export default userSlice.reducer


