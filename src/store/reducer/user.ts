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
    // 客户端存储token
    setToken: (state: userState): void => {
      const { token } = state
      if (token) {
        localStorage.setItem('token', token)
      }
    },
    // 移除token
    removeToken: (): void => {
      localStorage.removeItem('token')
    }
  },
  extraReducers(bulider) {
    // 三种状态, 失败和等待中未完善
    bulider.addCase(userLoginIn.fulfilled, (state: userState, action: PayloadAction<userState>) => {
      state.code = action.payload.code
      state.expireAt = action.payload.expireAt
      state.message = action.payload.message
      state.token = action.payload.token
    })
  }
})

// 登录网络请求
export const userLoginIn = createAsyncThunk('userLoginIn', async (data: User) => {
  const res: userState = await loginIn(data)
  return res
})

export const { setToken, removeToken } = userSlice.actions
export default userSlice.reducer



