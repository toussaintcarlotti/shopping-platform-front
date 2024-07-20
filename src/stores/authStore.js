import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from '@/api/axios';
import router from "@/router/index.js";
import {useToast} from "vue-toastification";
import {useCartStore} from "@/stores/cartStore.js";

const toast = useToast()

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null,
            token: null,
            mainLayout: 'app',
        }
    },
    actions: {
        authenticateUser(data) {
            this.$state.token = data.token;
            this.$state.user = data.user;
        },

        unauthenticateUser() {
            this.$state.token = null;
            this.$state.user = null;
            useCartStore().cart = null;
        },

        async login(credentials) {
            const res = await axios.post('login', credentials).then((res) => {
                this.authenticateUser(res.data);
                router.push('/');
                axios.get('cart').then((res) => {
                    useCartStore().cart = res.data;
                }).catch((error) => {
                    toast.error('Erreur de récupération du panier : ' + error.response.data.message);
                });

                toast.success('Connexion réussie');
            }).catch((error) => {
                console.log(error)
                toast.error('Erreur de connexion : ' + error.response.data.error);
            });
        },
        async logout() {
            await axios.post('logout').then((res) => {
                this.unauthenticateUser()
                window.location.reload();
                toast.success('Déconnexion réussie');
            }).catch((error) => {
                console.log(error)
                toast.error('Erreur de déconnexion : ' + error.response.data.message);
            });

        },

        async createUser(userInfo) {
            await axios.post('register', userInfo).then((res) => {
                this.unauthenticateUser()
                router.push('/login');
                toast.success('Inscription réussie');
            }).catch((error) => {
                console.log(error)
                toast.error('Erreur : ' + error.response.data.message);
            });
        },

        setMainLayout(payload = null) {
            this.mainLayout = payload; //app , auth
        },
    },
    persist: {
        enabled: true
    }
})
