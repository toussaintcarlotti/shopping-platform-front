import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from '@/api/axios';
import router from "@/router/index.js";

export const useAuthStore = defineStore('app', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        mainLayout: 'app',
    }),

    actions: {
        authenticateUser(data) {
            this.$state.token = data.token;
            this.$state.user = data.user;
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
        },

        unauthenticateUser() {
            localStorage.clear();
        },

        async login(credentials) {
            const res = await axios.post('login', credentials).then((res) => {
                this.authenticateUser(res.data);
                router.push('/');
            }).catch((error) => {
                console.log(error)
            });
        },
        async logout() {
            await axios.post('logout').then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
            this.unauthenticateUser()
            window.location.reload();
        },

        async createUser({commit}, userInfo) {
            await axios.post('users', userInfo).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
            this.unauthenticateUser()
        },

        setMainLayout(payload = null) {
            this.mainLayout = payload; //app , auth
        },
    }
})
