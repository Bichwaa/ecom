<template>
    <div class="cart-wrapper flex px-32">
        <div class="cart-items-wrapper">
            <span >Continue Shopping</span>
            <hr class="my-2 text-gray">
            <CartEntry v-for="i in 4"/>
        </div>
    </div>
</template>

<script setup>
import CartEntry from '../components/CartEntry.vue';
</script>

<style scoped>
    
</style>
