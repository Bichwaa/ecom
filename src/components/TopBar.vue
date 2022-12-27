<script setup>
import { ref } from 'vue'
import  {RouterLink} from "vue-router"
</script>

<template>
  <div class="nav-wrapper px-32">
    <router-link to="/" class="pr-3">Home</router-link>
    <router-link to="/cart" class="pr-3">Cart</router-link>
  </div>
</template>

<style scoped>

.nav-wrapper{
  margin: 2rem 0;
  /* padding: 0 3rem; */
}
</style>
