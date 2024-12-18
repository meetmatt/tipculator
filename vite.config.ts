import {defineConfig} from 'vite'
import type {UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

export default defineConfig({
    plugins: [react()],
    envDir: resolve('.'),
    root: resolve('./src'),
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
            },
        },
    },
}) satisfies UserConfig
