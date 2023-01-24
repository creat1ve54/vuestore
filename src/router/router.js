import { createWebHashHistory, createRouter } from 'vue-router'


import vAbout from '../components/v-about.vue'

const history = createWebHashHistory();
const routes = [
    {
        path: '/male',
        name: 'male',
        component: vAbout,
    }
]

const router = createRouter({
    routes,
    history
})


export default router;