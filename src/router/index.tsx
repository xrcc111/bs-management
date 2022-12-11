import { lazy, Suspense } from 'react'
import BaseLayout from '@/layout'
const About = lazy(() => import('@/views/about')) 
const Home = lazy(() => import('@/views/home'))
const PageOne = lazy(() => import('@/views/pageone'))
import { Navigate } from 'react-router-dom'
import { RouteObject } from './types'

// 懒加载模式下可能需要 Suspense
const withLoadingComponent = (component: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>
    {component}
  </Suspense>
)


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/home',
        index: true,
        element: withLoadingComponent(<Home />)
      },
      {
        path: '/page',
        element: withLoadingComponent(<PageOne />)
      }
    ]
  }
]

export default routes