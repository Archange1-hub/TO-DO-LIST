import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import AddTask from '@/views/AddTask.vue'
import EditTask from '@/views/EditTask.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add', name: 'AddTask', component: AddTask },
  { path: '/edit/:id', name: 'EditTask', component: EditTask },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

