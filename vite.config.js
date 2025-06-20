import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/google-script': {
        target: 'https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbxo17Er4ASB5pxUGs7DQxtrA9yIRxEVVVrN9lgDHpUIFPRl-3G2kDv6mnA7BAGEflg9Ow/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/google-script/, ''),
      },
    },
  },
})

// export default {
  
// };
