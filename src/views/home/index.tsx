import React from 'react'
import { Button, Space } from 'antd'
import { AppDispatch, RooState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from '@/store/reducer/counter'

const Home: React.FC = () => {
  const count = useSelector((state: RooState) => state.counter.count)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <Space>
        <Button type='primary' onClick={() => dispatch(increment())}>increment</Button>
        <Button type='primary' onClick={() => dispatch(decrement())}>decrement</Button>
        <Button type='primary' onClick={() => dispatch(incrementAsync())}>incrementAsync</Button>
      </Space>
    </div>

  )
}

export default Home
