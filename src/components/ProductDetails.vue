<template>
    <div class="details-wrapper flex px-52">
        <div class="flex flex-col items-center justify-start gap-4">
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
            <span class="description">
                {{ truncateDesc?truncated:product.description }}
                <span 
                    v-if="truncateDesc" 
                    class="text-violet-500 cursor-pointer" 
                    @click="toggleTruncate">
                    ...more
                </span>

                <span 
                    v-if="!truncateDesc" 
                    class="text-violet-500 cursor-pointer" 
                    @click="toggleTruncate">
                    |see less
                </span>
             </span>

            <div class="my-4">
                <button class="p-2 bg-purple text-white rounded-md text-xs" @click="addToCart">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from "../stores/fakeStoreConfig";
import { useRouter } from 'vue-router';

const store = useProductStore();
const router = useRouter()


onMounted(()=>{
    if(!props.product){
        props.product = store.currentProduct
    }
});

//props
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

//Truncation logic
const truncateDesc = ref(true)
const truncated = computed(()=>{
    const text = props.product.description;
    if(text?.length>280){
        return text.slice(0,280)
    }else{
        return text
    }
})
const toggleTruncate = ()=>{
    truncateDesc.value = !truncateDesc.value;
}

//Methods
const  exitPrompt = ()=>{
    let exit = confirm("Product added to cart, return to viewing product list?");

    if (exit != null) {
        router.push({name:"home"})
    } 
}

const addToCart =()=>{
    store.addTocart(props.product)
    exitPrompt()
}
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
