import { fileURLToPath, URL } from 'node:url'  // Importação do node

// Importação da configuração do vite
import { defineConfig } from 'vite' 

// Importação do vue
import vue from '@vitejs/plugin-vue' 

// Ferramenta de dev do vite
import vueDevTools from 'vite-plugin-vue-devtools' 

// Importei o Tailwind, mas deve rodar comando antes -> npm install tailwindcss @tailwindcss/vite
import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Adicionei o vue
    tailwindcss(), // Adicionei o Tailwind
    //vueDevTools(), // Devtools desativado
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
