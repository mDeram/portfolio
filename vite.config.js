import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = 5373;

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/count.js": {
                target: `http://localhost:${PORT}`,
                rewrite: _ => "/dev.js"
            }
        },
        port: PORT,
        strictPort: true
    }
})
