<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { computed } from 'vue';
import {useAuthStore} from "@/stores/authStore.js";
import AppLayout from '@/views/layouts/AppLayout.vue';
import AuthLayout from '@/views/layouts/AuthLayout.vue';

const store = useAuthStore();

const mainLayout = computed(() => {
  return store.mainLayout === 'auth' ? AuthLayout : AppLayout;
});
</script>

<template>
  <component v-bind:is="mainLayout"></component>
</template>

<style scoped>

</style>
