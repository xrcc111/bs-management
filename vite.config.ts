import path from 'path' // npm install @types/node -D 解决报红问题
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
const env = loadEnv('development', process.cwd())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      // 使用 proxy 实例
      '/api': {
        target: env.VITE_APP_API_BASE_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
