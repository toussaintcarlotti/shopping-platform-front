import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from "@/views/ProductsView.vue";
import {useAuthStore} from "@/stores/authStore.js";
import Login from "@/views/auth/loginView.vue";
import LoginView from "@/views/auth/loginView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/produits',
            name: 'products',
            component: ProductsView,
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {requiresGuest: true, layout: 'auth'}
        }
    ]
})

router.beforeEach((to, from, next) => {
    const store = useAuthStore();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('authenticated')) {
            next({
                path: '/login'
            });
        }
    }

    if (to.matched.some(record => record.meta.requiresGuest)) {
        store.setMainLayout('auth');
        if (localStorage.getItem('authenticated')) {
            next({
                path: '/'
            });
        }
    }

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});

export default router
