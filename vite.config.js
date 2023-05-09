import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  ///agregamos el server puerto 3000//
  server: {
    port: 3000
  },
  plugins: [react()],
})
