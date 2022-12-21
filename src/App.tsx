import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from './router'

// 跳转首页的组件
const ToLogin = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])
  return <></>
}

// 跳转登录页
const ToHome = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [])
  return <></>
}

/**
 * 大致逻辑
 * 1. 如果访问的是登陆页，且为有效token,跳转首页
 * 2. 如果访问的不是登录页,没或者token无效，跳转登录页，
 * 3. 正常放行
 */
const BeforeRouterEnter = (): JSX.Element => {
  const outlet = useRoutes(router)
  const location = useLocation()
  const token = localStorage.getItem('token')
  if (location.pathname === '/login' && token) {
    return <ToHome />
  }
  if (location.pathname !== '/login' && !token) {
    return <ToLogin />
  }
  return outlet as JSX.Element
}

function App() {
  return (
    <div className="App">
      <BeforeRouterEnter />
    </div>
  )
}

export default App
