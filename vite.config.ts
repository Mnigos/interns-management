import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line unicorn/prefer-module
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
})
