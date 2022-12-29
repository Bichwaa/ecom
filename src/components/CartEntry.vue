<template>
<div class="wrapper flex space-between items-center gap-8 p-1 my-2 border border-gray-300 rounded-xl">
    <img src="https://picsum.photos/100/100" alt="" width="70" height="70" class="rounded-md"/>

    <div class="flex flex-col">
        <span class="inline-block">name:</span>
        <span class="inline-block text-xs">extra info</span>
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

    <div>Tsh: {{ 187 }}</div>

    <div>
        <img :src="trashcan" width="" height="" alt="delete_icon">
    </div>
    <hr class="my-2 text-gray"/>
</div>
</template>

<script setup>
import { ref } from 'vue';
import trashcan from '../assets/trash-can.svg'
const quantity = ref(1)
</script>
