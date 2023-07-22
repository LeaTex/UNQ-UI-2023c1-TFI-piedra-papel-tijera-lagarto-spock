import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/UNQ-UI-2023c1-TFI-piedra-papel-tijera-lagarto-spock/"
})
