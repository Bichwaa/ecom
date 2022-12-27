<template>
 <section class="px-32">
    <h1 class="font-bold md:text-3xl">Produts</h1>
    <div class="product-card-wrapper grid grid-cols-4 gap-4">
        <ProductCard v-for="p in products" :product="p" :key="p.id"/>
    </div>
 </section>
</template>



<script setup>
import { storeToRefs } from 'pinia';
import ProductCard from '../components/ProductCard.vue';
import {useProductStore} from '../stores/fakeStoreConfig';

const store = useProductStore()

//DATA
const {products} = storeToRefs(store);
</script>

<style scoped>

</style>
