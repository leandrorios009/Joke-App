import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Agregar para configurar y generar carpeta docs en lugar de dist configurado como base ./ para subir a gh-pages

    //base: "./",
  // build: {
   // outDir: './docs'
 // }
})
