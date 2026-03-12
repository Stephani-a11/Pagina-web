import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite'

export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: 'vue'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
