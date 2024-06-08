<template>
  <div>
    <h1>Curso de Pinia</h1>
    <h4>User store</h4>
    {{ userStore.firstName }}
    {{ userStore.lastName }}
    {{ userStore.age }}
    <pre>
    </pre>
    <br><br>
    <h4>Cart store</h4>
    <pre>{{ cartStore.products }}</pre>
    <button @click="cartStore.$reset">Resetar store cart</button>
  </div>
</template>


<script setup>

import { watch } from 'vue';
import { useUserStore } from './store/user.js';
import { useCartStore } from './store/cart.js';

const userStore = useUserStore();
const cartStore = useCartStore();

// Aqui é um exemplo de como você pode usar o watch para observar mudanças em TODA a STORE
watch(userStore, (vl) => {
  console.log(vl)
})

// Aqui é um exemplo de como você pode usar o watch para observar mudanças em UMA PROPRIEDADE ESPECIFICA
watch(() => userStore.firstName, (vl) => {
  console.log(vl)
})

userStore.$patch({
  firstName: 'Ericson',
  lastName: 'J Santos',
  age: 30
})

cartStore.$subscribe((mutation, state) => {
  console.log(mutation, state)
})

cartStore.$patch((state) => {
  state.products.push({
    name: 'Imac',
    amount: 100
  })
})

// userStore.firstName = 'Ericson'
// userStore.lastName = 'J Santos'
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
