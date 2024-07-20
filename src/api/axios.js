import axios from 'axios'
import {useAuthStore} from "@/stores/authStore.js";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

instance.interceptors.request.use(
    config => {
        if(useAuthStore().token) {
            config.headers['Authorization'] = `Bearer ${useAuthStore().token}`;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401 && useAuthStore().token){
        useAuthStore().unauthenticateUser()
        window.location.reload();
    }
    return Promise.reject(error);
});

export default instance;
