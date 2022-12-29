<template>
    <div class="cart-wrapper flex content-around justify-center gap-16 px-32">
        <div class="cart-items-wrapper">
            <span >Continue Shopping</span>
            <hr class="my-2 text-gray">
            <p>shopping cart</p>
            <span>You have {{ 4 }} items in your cart.</span>
            <CartEntry v-for="i in 4" :key="i"/>
        </div>
        <CardDetails/>
    </div>
</template>

<script setup>
import CartEntry from '../components/CartEntry.vue';
import CardDetails from '../components/CardDetails.vue';
</script>

<style scoped>
    
</style>
