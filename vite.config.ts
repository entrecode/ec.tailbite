import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';
import path from 'path';
import { peerDependencies, dependencies } from './package.json';
import dts from 'vite-plugin-dts';
import crawl from './crawl';

// automated code splitting chunks:
const files = ['components', 'hooks', 'util'].reduce((acc, p) => acc.concat(crawl(p, 'src')), []);
const removeFileEnding = (p) => p.split('.').slice(0, -1).join('');
const chunks = Object.fromEntries(
  files.map((p) => [removeFileEnding(p), path.resolve(__dirname, 'src', ...p.split('/'))]),
);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  plugins: [
    markdown({ mode: [Mode.REACT] }),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        // index: path.resolve(__dirname, 'src', 'index.ts'),
        ...chunks,
      },
      formats: ['es' /* , 'cjs' */],
      // fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
    target: 'esnext',
  },
});
