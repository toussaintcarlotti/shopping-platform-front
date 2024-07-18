<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { computed } from 'vue';
import {useAuthStore} from "@/stores/authStore.js";
import appLayout from '@/views/layouts/app-layout.vue';
import authLayout from '@/views/layouts/auth-layout.vue';

const store = useAuthStore();

const mainLayout = computed(() => {
  console.log("ferf")
  return store.mainLayout === 'auth' ? authLayout : appLayout;
});
</script>

<template>
  <component v-bind:is="mainLayout"></component>
</template>

<style scoped>

</style>
