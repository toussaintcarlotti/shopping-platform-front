<script setup>

import {onMounted, ref} from "vue";
import axios from "@/api/axios.js";
import {useToast} from "vue-toastification";
import {useCartStore} from "@/stores/cartStore.js";

const cartStore = useCartStore();
const toast = useToast()
const products = ref([]);

onMounted(() => {
  axios.get('/products')
      .then(response => {
        products.value = response.data.data;
      })
      .catch(error => {
        toast.error('Erreur lors du chargement des produits')
      });
});

async function addToCart(productId) {
  await cartStore.addProduct(productId);
}

</script>

<template>
  <main>
    <div class="breadcrumb-area shadow dark bg-cover text-center text-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1>Produits</h1>
            <ul class="breadcrumb">
              <li><RouterLink :to="{ name: 'home' }"><i class="fas fa-home"></i> Accueil</RouterLink></li>
              <li>Magasin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="validtheme-shop-area default-padding">
      <div class="container">
        <div class="shop-listing-contentes">

          <div class="row item-flex center">

            <div class="col-lg-7">
              <div class="content">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="grid-tab-control" data-bs-toggle="tab" data-bs-target="#grid-tab" type="button" role="tab" aria-controls="grid-tab" aria-selected="true">
                      <i class="fas fa-th-large"></i>
                    </button>

                    <button class="nav-link" id="list-tab-control" data-bs-toggle="tab" data-bs-target="#list-tab" type="button" role="tab" aria-controls="list-tab" aria-selected="false">
                      <i class="fas fa-th-list"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>

            <div class="col-lg-5 text-right">
              <p>

              </p>
              <select name="cars" id="cars">
                <option value="volvo">Short by latest</option>
                <option value="saab">Short by Recent</option>
                <option value="mercedes">Short by Popular</option>
                <option value="audi">Short by Relevant</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="tab-content tab-content-info" id="shop-tabContent">
              <div class="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                <ul class="vt-products columns-3">
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

              <div class="tab-pane fade" id="list-tab" role="tabpanel" aria-labelledby="list-tab-control">
                <ul class="vt-products colums-2">
                  <li class="product" v-for="product in products" :key="product.id">
                    <div class="product-contents">
                      <div class="row align-center">
                        <div class="col-lg-5">
                          <div class="product-image">
                            <span class="onsale">Sale!</span>
                            <a>
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
                        </div>
                        <div class="col-lg-7">
                          <div class="product-caption">
                            <div class="tags">
                              <a>Catégorie</a>
                            </div>
                            <h4 class="product-title">
                              <a>{{ product.name }}</a>
                            </h4>
                            <div class="review-count">
                              <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                              </div>
                              <span>8 Review</span>
                            </div>
                            <div class="price">
                              <span>{{ product.price }} €</span>
                            </div>
                            <button class="btn" @click="addToCart(product.id)">
                              <i class="fas fa-shopping-cart me-2"></i>
                              <span>Ajouter au panier</span>
                            </button>
                          </div>
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
    </div>
  </main>
</template>
