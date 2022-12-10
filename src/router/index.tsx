import Home from '@/views/home'
import { lazy, Suspense } from 'react'
const About = lazy(() => import('@/views/about')) // 懒加载模式下可能需要 Suspense
import { Navigate } from 'react-router-dom'
import { RouteObject } from './types'

const withLoadingComponent = (com: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>
    {com}
  </Suspense>
)


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: withLoadingComponent(<About/>)
  }
]

export default routes