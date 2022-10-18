import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { peerDependencies, dependencies } from './package.json';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    /* lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    } */
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      input: ['src/components/Section.tsx', 'src/components/Button.tsx', 'src/components/Card.tsx'],
    },
    target: 'esnext',
  },
});
