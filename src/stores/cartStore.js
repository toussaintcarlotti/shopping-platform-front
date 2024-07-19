import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from '@/api/axios';
import {useToast} from "vue-toastification";

const toast = useToast()

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            cart: null,
        }
    },
    actions: {
        async addProduct(productId, quantity = 1) {
            await axios.post('/cart/product/' + productId, {
                quantity: quantity
            }).then((response) => {
                console.log(response.data)
                this.cart = response.data;
                localStorage.setItem('cart', JSON.stringify(this.cart));
                toast.success('Produit ajouté au panier');
            }).catch((error) => {
                if (error.response.status === 401) {
                    toast.error('Vous devez être connecté pour ajouter un produit au panier');
                } else {
                    toast.error('Une erreur est survenue : ' + error.response.data.error);
                }
            });
        },

        async removeProduct(productId) {
            await axios.delete('/cart/product/' + productId).then((response) => {
                this.cart = response.data;
                localStorage.setItem('cart', JSON.stringify(this.cart));
                toast.success('Produit retiré du panier');
            }).catch((error) => {
                toast.error('Une erreur est survenue : ' + error.response.data.error);
            });
        },
    },
    persist: {
        enabled: true
    }
})
