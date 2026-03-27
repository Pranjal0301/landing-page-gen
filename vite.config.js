import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        shore: 'index.html',
        riverside: 'riverside.html',
        austin: 'austin.html',
      },
    },
  },
});
