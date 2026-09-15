import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const srcDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // '@' -> src/, mirrored in jsconfig.json for editor autocomplete.
    // Existing relative imports are left as-is (already shallow and
    // consistent); this alias is available for new code.
    alias: {
      '@': srcDir,
    },
  },
})
