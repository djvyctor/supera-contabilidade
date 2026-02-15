import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Servicos from '../views/Servicos.vue'
import Contato from '../views/Contato.vue'
import Administracao from '../views/Administracao.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'Sobre', component: Sobre },
  { path: '/servicos', name: 'Serviços', component: Servicos },
  { path: '/contato', name: 'Contato', component: Contato },
  { path: '/administracao', name: 'Administracao', component: Administracao },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
