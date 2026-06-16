// Importamos la función defineConfig de Vite (nos da autocompletado)
import { defineConfig } from 'vite'

// Importamos el plugin de React para que Vite entienda archivos .jsx
import react from '@vitejs/plugin-react'

// Importamos el plugin de Tailwind para que Vite procese las clases CSS
import tailwindcss from '@tailwindcss/vite'

// Exportamos la configuración del proyecto
export default defineConfig({
  plugins: [
    react(),       // Plugin de React
    tailwindcss(), // Plugin de Tailwind
  ],
})