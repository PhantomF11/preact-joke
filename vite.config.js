import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
// import "bulma/bulma.sass"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()]
})
