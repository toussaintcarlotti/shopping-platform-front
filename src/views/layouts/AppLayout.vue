<script setup>

import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from "@coreui/vue/dist/esm/components/dropdown/index.js";

import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

import {useAuthStore} from "@/stores/authStore.js";
import {useCartStore} from "@/stores/cartStore.js";
import {useToast} from "vue-toastification";
import axios from "@/api/axios.js";

const store = useAuthStore();
const cartStore = useCartStore();
const toast = useToast()

async function removeToCart(productId) {
  await cartStore.removeProduct(productId);
}

async function createOrder() {
  await axios.post('/orders').then(response => {
    cartStore.clearCart();
    toast.success('Commande validée')
  }).catch(error => {
    toast.error('Erreur lors de la validation de la commande: ' + error.response.data.message)
  });
}
</script>

<template>
  <!--  BEGIN MAIN CONTAINER  -->
  <header>
    <nav class="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i class="fa fa-bars"></i>
          </button>
          <RouterLink :to="{ name: 'home' }" class="navbar-brand">
            <img src="@/assets/logo.png" class="logo" alt="Logo">
          </RouterLink>
        </div>

        <div class="main-nav-content">
          <div class="collapse navbar-collapse" id="navbar-menu">

            <RouterLink :to="{ name: 'home' }" class="navbar-brand">
              <img src="@/assets/logo.png" class="logo" alt="Logo">
            </RouterLink>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i class="fa fa-times"></i>
            </button>

            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'products' }">Produits</RouterLink>
              </li>
              <!--  <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">Shop</a>
                <ul class="dropdown-menu">
                  <li><a>Shop Product</a></li>
                  <li><a>Shop Single</a></li>
                  <li><a>Shop Single Version Two</a></li>
                </ul>
              </li> -->
            </ul>
          </div>

          <div class="attr-right">
            <div class="attr-nav d-flex gap-4">
              <Menu v-if="cartStore.cart && cartStore.cart.products.length">
                <button class="bg-transparent position-relative py-2">
                    <i class="far fa-shopping-cart fa-lg"></i>
                    <span class="cart-badge">{{ cartStore.cart.quantity }}</span>
                </button>

                <template #popper>
                  <div class="p-3 overflow-y-scroll" style="max-height: 400px; min-width: 300px;margin-bottom: 120px">
                    <div class="row" style="width: 300px" v-for="product in cartStore.cart.products"
                         :key="product.id">
                      <div class="col-3 thumb">
                        <img src="@/assets/images/piston.jpg" alt="Thumb">
                      </div>
                      <div class="info col-6">
                        <h6><a>{{ product.name }} </a></h6>
                        <p>{{ product.pivot.quantity }}x - <span
                            class="text-primary">{{ product.price * product.pivot.quantity }} €</span></p>
                      </div>
                      <div class="col-3 text-end">
                        <button @click="removeToCart(product.id)" class="btn">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="text-center position-fixed bottom-0 p-3 bg-white z-5 w-100">
                    <button @click="createOrder" class="btn btn-primary ">Valider le panier</button>
                  </div>
                </template>
              </Menu>
              <div v-else>
                <div class="bg-transparent position-relative py-2 text-black">
                  <i class="far fa-shopping-cart fa-lg"></i>
                </div>
              </div>

              <Menu>
                <button class="bg-transparent py-2">
                  <i class="far fa-user fa-lg"></i>
                </button>

                <template #popper>
                  <div class="p-3" >
                    <div class="cart-list" v-if="!store.token">
                      <div>
                        <RouterLink :to="{ name: 'login' }">Connexion</RouterLink>
                      </div>
                      <div>
                        <RouterLink :to="{ name: 'register' }">Inscription</RouterLink>
                      </div>
                    </div>
                    <div class="cart-list" v-if="store.token">
                      <div>
                        <div class="fw-bold h5 mb-0">{{ store.user.first_name }} {{ store.user.last_name }}</div>
                        <p class="text-muted small mb-0">{{ store.user.email }}</p>
                      </div>
                      <div>
                        <RouterLink :to="{ name: 'register' }">Mes commandes</RouterLink>
                      </div>
                      <div>
                        <button class="btn btn-danger w-100" @click="store.logout()">Déconnexion</button>
                      </div>
                    </div>
                  </div>
                </template>
              </Menu>
            </div>
          </div>

          <div class="overlay-screen"></div>
        </div>
      </div>
      <div class="overlay-screen"></div>
    </nav>
  </header>

  <router-view></router-view>

  <footer class="bg-dark text-light">
    <div class="container">
      <div class="f-items default-padding">
        <div class="row">
          <div class="col-lg-4 col-md-6 item">
            <div class="f-item about">
              <RouterLink :to="{ name: 'home' }" class="navbar-brand">
                <img src="@/assets/logo.png" class="logo" alt="Logo">
              </RouterLink>
              <p>
                Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are
                out. Fertile how old address did showing.
              </p>
              <form action="#">
                <input type="email" placeholder="Your Email" class="form-control" name="email">
                <button type="submit"><i class="arrow_right"></i></button>
              </form>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 item">
            <div class="f-item link">
              <h4 class="widget-title">Quick LInk</h4>
              <ul>
                <li>
                  <a><i class="fas fa-angle-right"></i> Home</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> About us</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Compnay History</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Features</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Blog Page</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 item">
            <div class="f-item link">
              <h4 class="widget-title">Community</h4>
              <ul>
                <li>
                  <a><i class="fas fa-angle-right"></i> Career</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Leadership</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Strategy</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Services</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> History</a>
                </li>
                <li>
                  <a><i class="fas fa-angle-right"></i> Components</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 item">
            <div class="f-item contact-widget">
              <h4 class="widget-title">Contact Info</h4>
              <div class="address">
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fas fa-home"></i>
                    </div>
                    <div class="content">
                      <strong>Address:</strong>
                      5919 Trussville Crossings Pkwy, Birmingham
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="content">
                      <strong>Email:</strong>
                      <a>info@validtheme.com</a>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="content">
                      <strong>Phone:</strong>
                      <a>+123 34598768</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p>&copy; Copyright 2024. All Rights Reserved</p>
          </div>
          <div class="col-lg-6 text-end link">
            <ul>
              <li>
                <a>Terms</a>
              </li>
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.cart-badge {
  position: absolute;
  top: 0;
  right: -10px;
  background: #ff0000;
  color: #fff;
  border-radius: 50%;
  padding-top: 4px;
  width: 5px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  min-width: 20px;
  text-align: center;
}
</style>
