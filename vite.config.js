import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/Components',
      '@utils': '/src/Utils',
      '@pages': '/src/Pages',
      '@routes': '/src/Routes',
      '@constants': '/src/Constants',
      '@api': '/src/Apis',
      '@hooks': '/src/Hooks',
      '@redux': '/src/Redux',
      '@translate': '/src/Translate',
      // Thêm các alias khác ở đây
    },
  },
})
