import {defineConfig, loadEnv} from 'vite'
import type {UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
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
      sourcemap: true,
    },
    preview: {
      port: parseInt(process.env.PORT),
      strictPort: true,
      host: true,
    },
    server: {
      port: parseInt(process.env.PORT),
      strictPort: true,
      host: true,
      origin: `http://0.0.0.0:${parseInt(process.env.PORT)}`,
    },
  }) satisfies UserConfig
}
