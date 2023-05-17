import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      store: '/src/store',
      core: '/src/core',
      api: '/src/api',
      router: '/src/router',
      hoc: '/src/hoc',
      pages: '/src/pages',
      components: '/src/components',
      utils: '/src/utils'
    }
  }
})
