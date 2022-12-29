<template>
<div class="wrapper flex space-between items-center gap-8 p-1 my-2 border border-gray-300 rounded-xl">
    <img :src="entry.image ||'https://picsum.photos/70/70'" alt="" width="50"  class="rounded-md"/>

    <div class="flex flex-col">
        <span class="inline-block">{{ truncated }}</span>
        <span class="inline-block text-xs">{{ entry.category }}</span>
    </div>

    <div class="action">
        <input 
            type="number" 
            name="quantity" 
            min="1" 
            v-model="quantity"
            class="w-12"
            >
    </div>

    <div><span>Tsh: {{ entry.price }}</span></div>

    <div @click="removeItemFromCart" class="cursor-pointer">
        <img :src="trashcan" width="18" height="" alt="delete_icon">
    </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import trashcan from '../assets/trash-can.svg'
import { useProductStore } from "../stores/fakeStoreConfig";

const store = useProductStore();

const props =  defineProps(['entry'])
const quantity = ref(1)

const truncated = computed(()=>{
    const text = props.entry.title;
    if(text.length>4){
        return text.slice(0,10)
    }else{
        return text
    }
})

const removeItemFromCart = ()=>{
    store.removeFromCart(props.entry)
}
</script>
