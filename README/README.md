# Como o projeto foi feito:






## Estrutura:





    
```java

meu-projeto/
│
├── backend/       → API Node.js + TypeScript
├── frontend/      → Vue 3 + TypeScript
├── package.json   → Pode conter scripts globais (opcional)
├── README/
    │
    └── README.md   

```





## Criando o projeto e o backend (Node.js + TypeScript)





    1. Criando pastas, iniciando node, baixando express, typescript com node e express:

        ```bash
        mkdir ProjectBase # Cria pasta raiz
        cd ProjectBase    # Entra na pasta raiz

        mkdir backend # Cria a pasta do backend
        cd backend    # Entra na pasta backend

        npm init -y                                                               # Inicia o node
        npm install express                                                       # Instala o express
        npm install --save-dev typescript ts-node-dev @types/node @types/express  # Instala o Typescript

        npx tsc --init # Cria o tsconfig.json
        ```
    
    2. Modifique o tsconfig.json para incluir:

        ```json
        {
            "compilerOptions": {
                "target": "ES2020",
                "module": "commonjs",
                "rootDir": "./src",
                "outDir": "./dist",
                "strict": true,
                "esModuleInterop": true,
                "skipLibCheck": true
            }
        }
        ```

    3. Pasta src:

        ```bash
        mkdir src            # Cria a pasta src
        echo. > src\index.ts # Cria o arquivo index.ts
        ```

        Coloque isso dentro do arquivo index.ts:

        ```ts
        import express from 'express'

        const app = express()
        const PORT = 3000

        app.get('/', (req, res) => {
            res.send('API está funcionando!')
        })

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        })
        ```

    4. Adicione um script no package.json:

        ```json
        "scripts": {
            "dev": "ts-node-dev --respawn src/index.ts"
        }
        ```

    5. Instalar cors:

        ```bash
        npm install cors                   # Instalar cors
        npm install --save-dev @types/cors # Fornece as tipagens necessárias para o TypeScript entender como usar o cors corretamente.
        ```

        Depois colocar o seguinte comando no index.ts:

        ```ts
        import cors from 'cors' // Importar cors
        app.use(cors())         // Falar para o app que o cors será utilizado

        ```


    6. Agora, rode a API no Cmd com: 

        ```bash
            npm run dev # Rodar API
        ```




    
## Criando o frontend (Vue 3 + TypeScript + router)





    1. No diretório raiz:
        
        ```bash
        cd ..                          # Somente se voce estiver na pasta backend
        npm create vue@latest frontend # Instalando o Vue
        ```

        Escolher as seguintes opções:

            ✔ TypeScript

            ✔ Pinia (opcional)

            ✔ Vue Router (opcional)

            ❌ ESLint (se não quiser)

            ❌ Vitest (se não for testar)

            ✔ Vite (ele já será usado por padrão)

    2. Depois de criar o frontend:

        ```bash
            cd frontend # Entra na pasta frontend
            npm install # Instala as pendencias
            npm run dev # Inicia o projeto
        ```

    3. Fazendo o frontend se comunicar com o backend:

        No helloworld coloque o seguinte codigo:

        ```vue
        <template>
            <h1>Resposta da API:</h1>
            <p>{{ resposta }}</p>
        </template>

        <script setup lang="ts">
            import { ref, onMounted } from 'vue'

            const resposta = ref('Carregando...')

            onMounted(async () => {
                const res = await fetch('http://localhost:3000')
                const texto = await res.text()
                resposta.value = texto
            })
        </script>
        ```

        Se o seu componente Vue está exibindo apenas: Resposta da API: Carregando... e não muda para o conteúdo da API, isso significa que a requisição falhou ou não obteve resposta. Para funcionar, tanto o backend quanto o frontend devem estar rodando.

    4. Instalar router:

        ```bash
        cd frontend            # Somente se não estiver na pasta frontend
        npm install vue-router # Instalar vue-router
        ```

        Configurar router:

        ```bash
        mkdir src/router            # Criar pasta router dentro da pasta src
        echo. > src/router/index.ts # Criar o arquivo index.html em src/router/index.ts
        ```

        Adicione o codigo a seguir em src/router/index.ts:
        
        ```ts
        import { createRouter, createWebHistory } from 'vue-router'
        import Home from '../views/Home.vue'
        import About from '../views/About.vue'

        const routes = [
            { path: '/', component: Home },      // Será utilizado na proxima etapa
            { path: '/sobre', component: About }
        ]

        const router = createRouter({
            history: createWebHistory(),
            routes
        })

        export default router
        ```






## Estrutura básica do Vue (frontend) - Criação da 'my-first-page'  ---> Opcional
        

        


    1. Dentro de src/views/, crie o arquivo Home.vue:

        ```bash
        cd src/views     # Entra na pasta views dentro da pasta src
        echo. > Home.vue # Cria o arquivo Home
        ```

        conteudo dele:

        ```vue
        <template>
            <div>
                <h1>Bem-vindo à minha primeira página Vue!</h1>
                <p>Essa é uma página feita com Vue 3 e TypeScript.</p>
            </div>
        </template>

        <script setup lang="ts">
            // Aqui você pode colocar lógica TypeScript futuramente
        </script>
        ```

    2. Mostrar essa página na tela:

        Agora, abra o arquivo App.vue e troque o conteúdo por:

        ```vue
        <script setup lang="ts">
            import Home from './views/Home.vue'
        </script>

        <template>
            <Home />
        </template>
        ```

    3. modifique o arquivo About.vue da pasta /views/ :

        ```vue
        <template>
            <div>
                <h1>Página Inicial</h1>
                <p>Bem-vindo à página principal!</p>
            </div>
        </template>

        <script setup lang="ts"></script>
        ```

    4. modifique o arquivo main.ts:

        ```ts
        import './assets/main.css'

        import { createApp } from 'vue'
        import { createPinia } from 'pinia'

        import App from './App.vue'
        import router from './router'

        createApp(App).use(router).mount('#app')
        ```

    5.Atualize o App.vue para exibir as páginas:

        ```vue
        <template>
            <div>
                <nav>
                    <RouterLink to="/">Início</RouterLink> |
                    <RouterLink to="/sobre">Sobre</RouterLink>
                </nav>
                <RouterView />
            </div>
        </template>

        <script setup lang="ts">
            import { RouterLink, RouterView } from 'vue-router'
        </script>
        ```

    6. Rode para ver se esta funcionando: 
        
        ```bash
        npm run dev
        ```

## Como instalar Tailwind no projeto 
    ↳  [Veja a documentação oficial do Tailwind](https://tailwindcss.com/docs/installation/using-vite)
