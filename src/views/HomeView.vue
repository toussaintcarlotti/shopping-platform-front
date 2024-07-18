<script setup>
</script>

<template>
  <main>
    <div class="validtheme-shop-area default-padding">
      <div class="container">
        <h2 class="text-center mb-5">Notre séléction</h2>
        <div class="row">
          <div class="col-lg-12">
            <div class="tab-content tab-content-info" id="shop-tabContent">
              <div class="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                <ul class="vt-products columns-3 justify-content-center">
                  <li class="product">
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
                          <a href="shop-single.html">Face & Body Foundation</a>
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
                          <span><del>$8.00</del></span>
                          <span>$5.00</span>
                        </div>
                        <a href="#" class="btn">
                          <i class="fas fa-shopping-cart"></i>
                          <span>Add to cart</span>
                        </a>
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
