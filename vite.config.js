
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
  root,
  appType: 'mpa',
  base: '/',

  input: {
    home: resolve(root, 'index.html'),
    lesson06p61: resolve(root, 'lesson-06-p-6-1/index.html'),
    lesson06p62: resolve(root, 'lesson-06-p-6-2/index.html'),
    lesson06p63: resolve(root, 'lesson-06-p-6-3/index.html'),
  },

  build: {
    outDir: 'dist',
    cssCodeSplit: true,
  },
});
