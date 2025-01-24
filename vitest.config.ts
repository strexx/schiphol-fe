import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true, // Enable global variables like `describe`, `it`, etc.
    environment: 'jsdom'
  },
  plugins: [tsconfigPaths()]
})
