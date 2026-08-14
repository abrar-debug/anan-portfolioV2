import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'sanity-studio-config': path.resolve(__dirname, './studio/sanity.config.ts'),
      'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    },
    dedupe: [
      'sanity',
      '@sanity/ui',
      '@sanity/vision',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'react-i18next',
      'i18next',
      'styled-components',
    ],
  },
})
