
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
  root,
  appType: 'mpa',
  base: '/',

  input: {
    home: resolve(root, 'index.html'),
    lesson1: resolve(root, 'lesson-1/index.html'),
  },

  build: {
    outDir: 'dist',
    cssCodeSplit: true,
  },
});
