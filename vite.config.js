// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        target: 'es2020',
        minify: 'terser', // ← força uso do terser (mais compatível)
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                format: 'es' // ← mantém formato ES, mas com fallback
            }
        }
    },
    server: {
        host: true,
        port: 5173
    }
});