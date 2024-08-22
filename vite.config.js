import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': '/src/Components',
      '@utils': '/src/Utils',
      '@pages': '/src/Pages',
      '@routes': '/src/Routes',
      '@constants': '/src/Constants',
      '@api': '/src/Apis',
      '@hooks': '/src/Hooks',
      '@redux': '/src/Redux',
      '@translate': '/src/Translate',
      '@features': '/src/Features',
    },
  },
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: false,
  },
})
