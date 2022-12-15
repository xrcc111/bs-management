import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

//  同步
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => { state.count += 1 },
    decrement: (state: CounterState) => { state.count -= 1 }
  },
  // 额外的reducer
  extraReducers(bulider) {
    bulider.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.count += action.payload
    })
  }
})

// 异步
export const incrementAsync = createAsyncThunk('incrementAsync', async () => {
  const res = await new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(200)
    }, 1000)
  })
  return res
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer