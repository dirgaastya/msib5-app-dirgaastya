import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Todos from "../pages/Todos.vue";


const routes: Array <RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/todos', component: Todos },
    { path: '/about', component: About },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
