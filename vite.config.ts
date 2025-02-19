import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-react-app/',  // 替换成你的 GitHub 仓库名
  plugins: [react()],
})
