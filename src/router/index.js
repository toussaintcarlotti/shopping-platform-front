import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from "@/views/ProductsView.vue";
import {useAuthStore} from "@/stores/authStore.js";
import LoginView from "@/views/auth/loginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import {useCartStore} from "@/stores/cartStore.js";

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
            component: ProductsView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {requiresGuest: true, layout: 'auth'}
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            meta: {requiresGuest: true, layout: 'auth'}
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to?.meta?.layout)
    let nextRoute = true
    const store = useAuthStore();
    if (to?.meta?.layout === 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.token) {
            nextRoute = '/login'
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.token) {
            store.setMainLayout('app');
            nextRoute = '/'
        }
    }
    next(nextRoute);
});

export default router
