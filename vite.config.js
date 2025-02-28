import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["lucide-react"], // Ensures only one instance of lucide-react is used
  },
});