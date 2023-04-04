import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  plugins: [markdown({ mode: [Mode.REACT] }), react()],
  build: {
    target: 'esnext',
  },
});
