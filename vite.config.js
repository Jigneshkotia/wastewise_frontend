import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from `.env`
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    'process.env': {
      VITE_SERVICE_ID: process.env.VITE_SERVICE_ID,
      VITE_TEMPLATE_ID: process.env.VITE_TEMPLATE_ID,
      VITE_USER_ID: process.env.VITE_USER_ID,
    },
  },
});