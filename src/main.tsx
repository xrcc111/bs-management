import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' // 初始化样式
import '@/assets/styles/global.scss' // 全局样式
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
