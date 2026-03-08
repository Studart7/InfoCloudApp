import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/InfoCloudApp/',
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  optimizeDeps: {
    exclude: ['react-leaflet', '@react-leaflet/core']
  }
});
