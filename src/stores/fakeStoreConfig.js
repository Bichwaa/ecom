import { ref, } from 'vue'
import { defineStore } from 'pinia';
import { useHttpGet} from '../composables/useHttpGet';
import { useStorageAsync } from '@vueuse/core'

const httpGet = useHttpGet()

const productsUrl = `/products`;
const config = ref({})

export const useProductStore = defineStore('configs', () => {
  const products = useStorageAsync("products",ref([]))
  const cartProducts = useStorageAsync("cartProducts",ref([]))
  const currentProduct = useStorageAsync("currentProduct", ref({}))

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

  function removeFromCart(prod){
    // cartProducts.value = cartProducts.value.filter((x)=>{
    //   return x.id==prod.id
    // })
    cartProducts.value.sort(function(a, b){return a.id==prod.id}).pop();
  }

  return { products, currentProduct, cartProducts, getProducts, setCurrentProduct, addTocart, removeFromCart}
})
