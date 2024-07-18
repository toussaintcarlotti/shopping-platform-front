<script setup>
import { useRouter } from 'vue-router';
import {useAuthStore} from "@/stores/authStore.js";

const form = {
  last_name: '',
  first_name: '',
  email: '',
  password: ''
};

</script>

<template>
  <div id="contact" class="contact-area default-padding">
    <div class="container">
      <div class="d-flex justify-content-center">
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/logo.png" width="200" alt="">
        </RouterLink>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 contact-form-box">
          <div class="form-box shadow bg-light rounded p-5">
            <h2 class="text-center">Connexion</h2>
            <p class="text-center">
              Connectez-vous à votre compte pour ajouter des articles aux paniers ou voir vos commande
            </p>
            <form action="" method="POST" class="contact-form mt-5">
              <div class="row g-4">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input class="form-control" id="last_name" name="last_name" placeholder="Nom*" type="text">
                    <span class="alert-error"></span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input class="form-control" id="first_name" name="first_name" placeholder="Prénom*" type="text">
                    <span class="alert-error"></span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input class="form-control" v-model="form.email" id="email" name="email" placeholder="Email*" type="email">
                    <span class="alert-error"></span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input class="form-control"  v-model="form.password" id="password" name="password" placeholder="Mot de passe*"
                           type="password">
                    <span class="alert-error"></span>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-5">
                <button class="btn circle btn-theme-effect btn-sm border" type="submit" name="submit" id="submit">
                  Créer un compte
                </button>
              </div>
              <!-- Alert Message -->
              <div class="col-lg-12 alert-notification">
                <div id="message" class="alert-msg"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>