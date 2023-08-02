import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
const Main = () => import("@/components/pages/Main.vue")

const routes: Array<RouteRecordRaw> = [
{
  path: "/",
  component: Main,
  name: "main"
},

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
//process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),