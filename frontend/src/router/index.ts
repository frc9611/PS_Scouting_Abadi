import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Register from '../views/Register.vue'
import Read from '../views/Read.vue'
import Menu from '../views/Menu.vue'
import Edit from '../views/Edit.vue'
import Delete from '../views/Delete.vue'

const routes = [
  { path: '/', component: Menu },
  { path: '/sobre', component: About },
  { path: '/register', component: Register }, // Defini a rota do cadastro
  { path: '/read', component: Read }, // Defini a rota para ler
  { path: '/menu', component: Menu }, // Defini a rota do menu
  { path: '/edit', component: Edit }, // Defini a rota do menu
  { path: '/delete', component: Delete } // Defini a rota do menu
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router