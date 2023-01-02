import Routing from './index.vue'

export const routes = [
  {
    path: '/',
    component: () => import('./posts-list')
  }
]

export { Routing }