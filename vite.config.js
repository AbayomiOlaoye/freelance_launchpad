import { defineConfig } from 'vite';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'es',
      }
    },
    sourcemap: 'inline',
  },
  resolve: {
    alias: {
      stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer',
    }
  }
})
