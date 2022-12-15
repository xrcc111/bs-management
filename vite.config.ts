import path from 'path' // npm install @types/node -D 解决报红问题
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        // 使用 proxy 实例
        '/admin': {
          target: env.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/admin/, ''),
        },
      },
    },
  }
})



/**
 * 
 * 
 */