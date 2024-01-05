/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      app: '/src/app',
      layouts: '/src/layouts',
      components: '/src/components',
      shared: '/src/shared',
      pages: '/src/pages',
      types: '/src/types',
      theme: '/src/theme',
      ui: '/src/ui',
      constants: '/src/constants',
      api: '/src/api',
      utils: '/src/utils',
      validation: '/src/validation',
      assets: '/src/assets',
      service: '/src/service',
      store: '/src/store',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      all: true,
    },
  },
});
