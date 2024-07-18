import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from '@/api/axios';

export const useAuthStore = defineStore('app', {
    state: () => ({
        authenticated: false,
        user: null,
        token: null,
        client: null,
        mainLayout: 'app',
    }),

    actions: {
        authenticateUser(data) {
            this.$state.authenticated = true;
            this.$state.token = data.token;
            this.$state.user = data.user;
            localStorage.setItem('authenticated', '1');
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        },
        unauthenticateUser() {
            localStorage.clear();
            router.push('/login');
        },

        async login(credentials) {
            await axios.get('sanctum/csrf-cookie');
            const res = await axios.post('login', credentials);
            this.authenticateUser(res.data);
            router.push('/');
        },
        async logout() {
            this.unauthenticateUser()
            await axios.post('logout').then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
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
