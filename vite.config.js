import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: '/',
  build: {
    // Split vendor libraries for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split React core into its own chunk
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            // Split styled-components
            if (id.includes('styled-components')) {
              return 'vendor-styled';
            }
            // Group other node_modules into a vendor chunk
            return 'vendor';
          }
        }
      }
    },
    // Increase chunk size warning limit since we have large data files
    chunkSizeWarningLimit: 1000,
    // Minify with esbuild for faster builds
    minify: 'esbuild',
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components']
  }
}))
