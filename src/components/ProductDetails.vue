<template>
    <div class="details-wrapper flex px-52">
        <div class="flex flex-col items-center justify-between">
            <div 
            class="product-img-wrapper p-6 bg-blue"
            :style="{ 'background-image': 'url('+ product.image + ')' }"
            >
            </div>
            <span class="font-bold">Price:{{ product.price }}</span>
        </div>
        <div class="info flex flex-col px-6">
            <span class="text-blue font-bold">DESCRIPTION</span>
            <span class="title font-bold text-2xl">{{ product.title }}</span>
            <span class="description">{{ product.description }}</span>

            <button class="px-1 py-2 bg-purple text-gray-500">add to cart</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product:{
        type:Object,
        default:{
            name:"A generic product",
            description:"A generic product description",
            price:1000,
            image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
    }
})
</script>

<style scoped>
    .product-img-wrapper{
        border: solid 15px #4DE1C1;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 50%;
        border-radius:50%;
        width: 350px;
        height: 350px;
    }
</style>
