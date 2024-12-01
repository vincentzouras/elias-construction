import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Fonts from 'vite-plugin-fonts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Fonts({
      google: {
        families: [
          'Comfortaa:wght@300..700',
          'PT Serif:ital,wght@0,400;0,700;1,400;1,700'
        ]
      }
    })
  ],
});
