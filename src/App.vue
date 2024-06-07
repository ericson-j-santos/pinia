<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    <pre>
    {{ userStore.user }}
    </pre>
    <br></br>
    <h4>Cart store</h4>
    <pre>{{ cartStore.products }}</pre>
  </div>
</template>

<script setup>
import { useUserStore } from './store/user.js';
import { useCartStore } from './store/cart.js';

const userStore = useUserStore();
const cartStore = useCartStore();

cartStore.products[0].name = 'Macbook Pro'
cartStore.products.push({
  name: 'Imac',
  amount: 1000
})

// userStore.user.first_name = 'ERICSON'
</script>

<!-- <script>
export default {
setup() {
 const userStore = useUserStore();
 const cartStore = useCartStore();

 return {
 userStore,
 cartStore
 };
 }
 }
 </script> -->
