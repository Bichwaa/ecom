<template>
    <section class="px-32">
        <ProductDetails :product="currentProduct"/>
    </section>
   </template>
   
   <script setup>
   import ProductDetails from "../components/ProductDetails.vue"
   import { storeToRefs } from 'pinia';
   import {useProductStore} from '../stores/fakeStoreConfig';

   
   const store = useProductStore()
   
   //DATA
   const {currentProduct} = storeToRefs(store);
   </script>
   
   <style scoped>
   
   </style>
   