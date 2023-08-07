import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
const Main = () => import("@/components/pages/Main.vue")
const Film = () => import('@/components/pages/Film.vue')
const routes: Array<RouteRecordRaw> = [
{
  path: "/",
  component: Main,
  name: "main"
},
{
  path: "/film/:id",
  component: Film,
  name: 'film'
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
//process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),