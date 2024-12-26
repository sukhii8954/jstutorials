import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{  // we used this to make the server connected with frontend
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [react()],
})
