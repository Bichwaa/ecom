<template>
    <div class="cart-wrapper flex content-around justify-center justify-items-stretch gap-16 px-32">
        <div class="cart-items-wrapper">
            <span >Continue Shopping</span>
            <hr class="my-2 text-gray">
            <p>shopping cart</p>
            <span>You have {{ 4 }} items in your cart.</span>
            <template v-for="i in cartProducts" :key="i.id">
                <CartEntry :entry="i"/>
            </template>
        </div>
        <CardDetails/>
    </div>
</template>

<script setup>
// import { ref, computed, onMounted } from 'vue';
import { useProductStore } from "../stores/fakeStoreConfig";
import CartEntry from '../components/CartEntry.vue';
import CardDetails from '../components/CardDetails.vue';

const store = useProductStore();
const {cartProducts} = store;
</script>
    

<style scoped>
    
</style>
