<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useProductStore } from "./stores/fakeStoreConfig";
import AppBar from './components/TopBar.vue'


onMounted(async ()=>{
  const store = useProductStore()
  await store.getProducts()
})
</script>

<template>
  <AppBar/>
  <RouterView />
</template>

<style scoped>
</style>
