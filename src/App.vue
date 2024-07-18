<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i class="fa fa-bars"></i>
          </button>
          <a class="navbar-brand">
            <img src="@/assets/logo.png" class="logo" alt="Logo">
          </a>
        </div>

        <div class="main-nav-content">
          <div class="collapse navbar-collapse" id="navbar-menu">

            <img src="@/assets/logo.png" alt="Logo">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i class="fa fa-times"></i>
            </button>

            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li >
                <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
              </li>
              <li >
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
            <div class="attr-nav">
              <ul>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown">
                    <i class="far fa-shopping-cart"></i>
                    <span class="badge">3</span>
                  </a>
                  <ul class="dropdown-menu cart-list">
                    <li>
                      <div class="thumb">
                        <a class="photo">
                          <img src="@/assets/images/piston.jpg" alt="Thumb">
                        </a>
                        <a class="remove-product">
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                      <div class="info">
                        <h6><a>Delica omtantur </a></h6>
                        <p>2x - <span class="price">$99.99</span></p>
                      </div>
                    </li>
                    <li>
                      <div class="thumb">
                        <a class="photo">
                          <img src="@/assets/images/piston.jpg" alt="Thumb">
                        </a>
                        <a class="remove-product">
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                      <div class="info">
                        <h6><a>Omnes ocurreret</a></h6>
                        <p>1x - <span class="price">$33.33</span></p>
                      </div>
                    </li>
                    <li class="total">
                      <span class="pull-right"><strong>Total</strong>: $0.00</span>
                      <a class="btn btn-default btn-cart">Cart</a>
                      <a class="btn btn-default btn-cart">Checkout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="attr-right">
            <div class="attr-nav">
              <ul>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown">
                    <i class="far fa-user"></i>
                  </a>
                  <ul class="dropdown-menu cart-list">
                    <li>
                      <div class="info">
                        <h6><RouterLink>Connexion</RouterLink></h6>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <h6><RouterLink>Inscription</RouterLink></h6>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="overlay-screen"></div>
        </div>
      </div>
      <div class="overlay-screen"></div>
    </nav>
  </header>

  <RouterView/>

  <footer class="bg-dark text-light">
    <div class="container">
      <div class="f-items default-padding">
        <div class="row">
          <div class="col-lg-4 col-md-6 item">
            <div class="f-item about">
              <img src="@/assets/logo.png" alt="Logo">
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

<style scoped>

</style>
