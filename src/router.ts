import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home.vue'
import AddUser from './views/user/add.vue'
import UpdateUser from './views/user/[id]/update.vue'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user/add',
    component: AddUser,
  },
  {
    path: '/user/:id/update',
    component: UpdateUser,
  },
] as const satisfies readonly RouteRecordRaw[]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
