import { ref, } from 'vue'
import { defineStore } from 'pinia';
import { useHttpGet} from '../composables/useHttpGet';
import { useStorageAsync } from '@vueuse/core'

const httpGet = useHttpGet()

const productsUrl = `/products`;
const config = ref({})

export const useProductStore = defineStore('configs', () => {
  const products = useStorageAsync("products",ref([]))
  const cartProducts = ref([])
  const currentProduct = ref({})

  async function getProducts(){
    const data = await httpGet(productsUrl);
    config.value = data.config
    products.value = data.data;
  }

  async function setCurrentProduct(prod){
   currentProduct.value = products.value.filter(x=>x.id==prod.id)[0]
  }

  function addTocart(prod){
    cartProducts.value.push(prod)
  }

  return { products, currentProduct, getProducts, setCurrentProduct, addTocart}
})
