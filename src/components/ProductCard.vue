<template>
    <div class="card cursor-pointer" @click="getDetailView(product)">
        <div class="product-img-wrapper">
            <img :src="product.image" alt="Poduct image" height="180" width="150" >
        </div>
        <div class="info flex flex-col">
            <span class="name">{{ product.title }}</span>
            <span class="price font-bold">Price:{{ product.price }}  Tsh</span>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {useProductStore} from '../stores/fakeStoreConfig';

const store = useProductStore()

const router = useRouter()

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

const getDetailView = (pr)=>{
    store.setCurrentProduct(pr)
    router.push({name:"detailsView", params:{id:pr.id}})
}
</script>

<style scoped>
    img{
        min-height:180px;
        max-height:180px;
    }
</style>
