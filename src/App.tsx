import { useState } from 'react'
import Header from '@/components/Header'
import { Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons'
import { useRoutes } from 'react-router-dom'
import router from './router'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {outlet}
    </div>
  )
}

export default App
