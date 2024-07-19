<script setup>
import {onMounted, ref} from "vue";
import axios from "@/api/axios.js";
import {useCartStore} from "@/stores/cartStore.js";

const products = ref([]);

const cartStore = useCartStore();
import { useToast } from 'vue-toastification'

const toast = useToast()

onMounted(() => {
  axios.get('/products/overview')
      .then(response => {
        products.value = response.data;
      })
      .catch(error => {
        toast.error('Erreur lors du chargement des produits')
      });
});

async function addToCart(productId) {
  await cartStore.addProduct(productId);
}

const showSuccess = () => {
};
</script>

<template>
  <main>
    <div class="validtheme-shop-area default-padding">
      <div v-if="products.length > 0" class="container">

        <h2 class="text-center mb-5">Notre séléction</h2>
        <div class="row">
          <div class="col-lg-12">
            <div class="tab-content tab-content-info" id="shop-tabContent">
              <div class="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                <ul class="vt-products columns-3 justify-content-center">
                  <li v-for="product in products" :key="product.id" class="product">
                    <div class="product-contents">
                      <div class="product-image">
                        <a href="shop-single.html">
                          <img src="@/assets/images/piston.jpg" alt="Product">
                        </a>
                        <div class="shop-action">
                          <ul>
                            <li class="wishlist">
                              <a href="#"><span>Add to wishlist</span></a>
                            </li>
                            <li class="compare">
                              <a href="#"><span>Compare</span></a>
                            </li>
                            <li class="quick-view">
                              <a href="#"><span>Quick view</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-caption">
                        <h4 class="product-title">
                          {{ product.name }}
                        </h4>
                        <div class="price">
                          <span>{{ product.price }} €</span>
                        </div>
                        <div class="d-flex justify-content-end">
                          <button @click="addToCart(product.id)" class="btn">
                            <i class="fas fa-shopping-cart me-2"></i>
                            <span>Ajouter au panier</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <nav class="woocommerce-pagination">
              <ul class="page-numbers">
                <li><a class="previous page-numbers" href="#"><i class="fas fa-angle-left"></i></a></li>
                <li><span aria-current="page" class="page-numbers current">1</span></li>
                <li><a class="page-numbers" href="#">2</a></li>
                <li><a class="next page-numbers" href="#"><i class="fas fa-angle-right"></i></a></li>
              </ul>
            </nav>-->
          </div>
        </div>
      </div>
      <div v-else class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </main>
</template>
